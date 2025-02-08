const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const url = "mongodb+srv://admin:1234@cluster0.yrinhkn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const mongoclient = require('mongodb').MongoClient;
// const dbName = 'Javachip';

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// async function run() {
//   try {
//     const database = client.db('Javachip');
//     const movies = database.collection('account');

//     const query = { username: 'aa' };
//     const movie = await movies.findOne(query);

//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);




// app.get('/signup', function(req, res){
//     mydb.collection('account').find().toArray().then(result => {
//         console.log(result);
//         res.render('SignUp.html', { data : result });
//     })  

// });

mongoclient.connect(url)
  .then(client => {
    mydb = client.db('Javachip');
    mydb.collection('account').find().toArray().then(result => {
      console.log(result);
    });

    app.listen(8080, function() {
      console.log("포트 8080으로 서버 대기중...");
    });
  })
  .catch(err => {
    console.log(err);
  });

app.get('/signup', async (req, res) => {
    try {
        // Since db is already connected, we can use it directly
        const accounts = await db.collection('account').find().toArray();
        res.render('SignUp.html', { data: accounts });
    } catch (error) {
        console.error('Error fetching accounts:', error);
        res.status(500).send('Internal Server Error');
    }
});