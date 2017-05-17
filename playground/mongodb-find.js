
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos').find({
  //   _id : new ObjectID('59162820d67cd6125ccfcee2')
  // }).toArray().then((docs)=>{
  //   console.log(JSON.stringify(docs,undefined,2))
  // }, (err)=>{
  //   console.log('unable to fetch',err);
  // } );

  // db.collection('Todos').find({
  //
  // }).count().then((count)=>{
  //   console.log(`Todos count: ${count}`)
  // }, (err)=>{
  //   console.log('unable to fetch',err);
  // } );

  db.collection('Users').find({username: 'Djans'})
  .toArray().then((data)=>{
    console.log(JSON.stringify(data, undefined, 2))
  }, (err)=>{
    console.log('error has been occured :',err);
  })

  //db.close();
});
