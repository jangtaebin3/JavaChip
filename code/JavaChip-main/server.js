
/*
const http =require ('http');

const hostname ='127.0.0.1';
const port=3000;

const server =http.createServer((req,res)=>{
  res.statusCode=200;
  res.setHeader('Content-Type','text/plain');
  res.end('Hello World');
});

server.listen(port, hostname,()=> {
  console.log(`server running at http://${hostname}:${port}/`)
});
*/
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const mongoclient = require('mongodb').MongoClient;
const url = 'mongodb+srv://admin:1234@cluster0.yrinhkn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const ObjId = require('mongodb').ObjectId;

app.set('view engine', 'ejs');
//정적 라이브러리 추가
app.use(express.static("public"));
let cookieParser = require('cookie-parser');
app.use(cookieParser('nczka0e398423kpfd'));

let session=require('express-session');
app.use(session({
  secret: 'dkufe8938493j4e08349u',
  resave : false,
  saveUninitialized:true
}))

const sha=require('sha256');



app.get('/cookie', function(req,res){
  let milk = parseInt(req.signedCookies.milk) + 1000;
  if(isNaN(milk))
    {
      milk=0;
    }
  res.cookie('milk',milk,{signed:true});
  res.send('product :' +milk +"원");
});




mongoclient.connect(url)
  .then(client => {
    mydb = client.db('myboard');
    mydb.collection('post').find().toArray().then(result => {
      console.log(result);
    });

    app.listen(8080, function() {
      console.log("포트 8080으로 서버 대기중...");
    });
  })
  .catch(err => {
    console.log(err);
  });

  app.get('/enter', function(req, res){
    res.render('enter.ejs' );

  });
  

  /*
  app.post('/save',function(req,res){
      console.log(req.body.title);
      console.log(req.body.content);
    
      mydb.collection('post').insertOne(
        {title : req.body.title, content: req.body.content}
      ).then(result=>{
        console.log(result);
        console.log('데이터 추가 성공');
      });

  */

app.post('/save',function(req,res){
  // console.log(req.body.title);
  // console.log(req.body.content);
  //몽고 DB에 데이터 저장하기
  mydb.collection('post').insertOne(
    {title: req.body.title, content : req.body.content, date: req.body.someDate}
  ).then(result => {
    console.log(result);
    console.log('데이터 추가 성공');
  })
});


app.post("/delete", function(req, res){
    console.log(req.body._id);
    req.body._id=new ObjId(req.body._id);
    mydb.collection('post').deleteOne(req.body)
    .then(result=>{
      console.log('삭제완료');
      res.status(200).send();
    })
    .catch(err=>{
      console.log(err);
      res.status(500).send();
    });
    
});

//몽고 db에서 찾기
app.get('/list', function(req, res){
  mydb.collection('post').find().toArray().then(result => {
      console.log(result);
      res.render('list.ejs', { data : result });
  })  
  //res.sendFile(__dirname+'/list.html');
  //res.render('list.ejs');
});

app.get('/content/:id',function(req,res){
  console.log(req.params.id);
  req.params.id=new ObjId(req.params.id);
  mydb
    .collection("post")
    .findOne({_id : req.params.id})
    .then((result)=>{
      console.log(result);
      res.render('content.ejs', {data : result});
    });
  
});
/*
app.get("/edit/:id",function(req, res){
  req.params.id= new ObjId(req.params.id);
  mydb
    .collection("post")
    .findOne({_id: req.params.id})
    .then((result)=>{
      console.log(result);
      res.render("edit.ejs",{data:result});
    })
  
});

*/
app.post("/edit",function(req, res){
  console.log(req.body);
  req.body.id=new ObjId(req.body.id);
  mydb
    .collection("post")
    .updateOne({_id : req.body.id},{$set : {title :req.body.title, content : req.body.content, date : req.body.someDate}})
    .then((result)=>{
      console.log("수정완료");
      res.redirect('/list');
    })
    .catch((err)=>{
      console.log(err);
    });
});


app.get("/",function (req,res){

  // res.render("index.ejs");
  if(req.session.user){
    console.log("세션유지");
    res.render("index.ejs",{user:req.session.user});
  }else{
    console.log("user : null");
    res.render("index.ejs",{user: null});
  }
});


app.get("/session",function(req,res){
  if(isNaN(req.session.milk)){
    req.session.milk=0;
  }
  req.session.milk=req.session.milk +1000;
  res.send("session : " +req.session.milk+"원");
});

app.get("/login", function(req,res){
  
  console.log('req.session');
  if(req.session.user){
    console.log('세션 유지');
    res.render('index.ejs',{user:req.session.user});
    // res.send('로그인 되었습니다.');
  }else{
    res.render("login.ejs");
  }
  
  // console.log("로그인 페이지");
  
});
app.post("/login", function(req,res){
  console.log("아이디 : " + req.body.userid);
  console.log("비밀번호 : " + req.body.userpw);

  mydb
  .collection("account")
  .findOne({userid: req.body.userid})
  .then((result)=>{

      if(result.userpw == sha(req.body.userpw)){
        req.session.user=req.body;
        console.log('새로운 로그인');
        res.render('index.ejs',{user:req.session.user});
        // res.send('로그인 되었습니다');
      } else {
        res.render('login.ejs')
        // res.send('비밀번호가 틀렸습니다.');
      } 
  });
});

app.get("/logout", function(req,res){
  console.log("로그아웃");
  req.session.destroy();
  res.render('index.ejs',{user:null});
});

app.get("/signup",function(req,res){
  res.render("signup.ejs");
});

app.post("/signup", function(req,res){
  console.log(req.body.userid);
  console.log(sha(req.body.userpw));
  console.log(req.body.usergroup);
  console.log(req.body.useremail);

  mydb
  .collection("account")
  .insertOne({
    userid:req.body.userid,
    userpw:sha(req.body.userpw),
    usergroup:req.body.usergroup,
    useremail:req.body.useremail,
  })
  .then((result)=>{
    console.log("회원가입 성공");
  });
  res.redirect("/");
});

  //MySQL DB에 데이터 저장하기
//   let sql="insert into post (title, content, created) values(?, ?, NOW())";
//   let params =[req.body.title, req.body.content];
//   conn.query(sql,params, function(err,result){
//     if(err) throw err;
//     console.log('데이터 추가 성공');
//   });
//   res.send('데이터 추가성공');
// });
  

// var mysql=require("mysql");
// var conn=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"12345678",
//     database:"myboard",
// });



// conn.connect();

// conn.query("select * from post", function (err,rows,fields){
//     if (err) throw err;
//     console.log(rows);
// });









