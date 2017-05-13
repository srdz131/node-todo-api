const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');
  //
  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err,res)=>{
  //   if(err){
  //     return console.log('unable to insert todo');
  //   };
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    username: 'Djans',
    age: 24
  },(err,res)=>{
    if(err){
      return console.log('Unable to connect to the database');
    }
    console.log('Connected to database and data is in the cloud', JSON.stringify(res.ops, undefined, 2));
  });

  db.close();
});
