const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
  if(err){
    return console.log('Error has been occured while connecting...')
  }
  console.log('You are up!');

  db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('591c4bb7fa2f7d1375dc36c5')
  },{
    $set: {username: 'Mikele'},
    $inc: {age:1}
  },
  {
    returnOriginal: false
  }).then((data)=>{
    console.log(data);
  })
})
