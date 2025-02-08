const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const url = "mongodb+srv://admin:1234@cluster0.yrinhkn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const mongoclient = require('mongodb').MongoClient;


const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const path = require('path');
app.use(express.static(path.join(__dirname, '../pages'))); //정적파일 위함
app.use('/scripts', express.static(path.join(__dirname, './scripts'))); //js 파일 위함

//몽고db 연결
mongoclient.connect(url) 
  .then(client => {
    mydb = client.db('Javachip');
    //db에 있는 데이터 출력하기
    // mydb.collection('account').find().toArray().then(result => {
    //   console.log(result);
    // });

    app.listen(8080, function() {
      console.log("포트 8080으로 서버 대기중...");
    });
  })
  .catch(err => {
    console.log(err);
});

//회원가입
app.get('/signup', async (req, res) => {
    try {
        const accounts = await mydb.collection('account').find().toArray();
        res.sendFile(path.join(__dirname, '../pages/Auth/SignUp/SignUp.html')); //html 열기
    } catch (error) {
        console.error('Error fetching accounts:', error);
        res.status(500).send('Internal Server Error');
    }
});

//회원가입 정보 저장
app.post('/saveacc',function(req,res){
    mydb.collection('account').insertOne( //db에 정보 저장
      {username: req.body.username, password : req.body.password, name: req.body.name,
        nickname: req.body.nickname, email: req.body.email}
    ).then(result => { 
      console.log(result);
      console.log('데이터 추가 성공');
      res.status(200).send(); // js 에게 성공했다고 알려서 다음 창으로 넘어가게 하기
    })
  });
