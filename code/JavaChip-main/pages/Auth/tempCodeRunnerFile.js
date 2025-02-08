async function run() {
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


// const express = require('express');
// const app = express();

// app.get('/signup', function(req, res){
//     mydb.collection('account').find().toArray().then(result => {
//         console.log(result);
//         res.render('SignUp.html', { data : result });
//     })  

// });