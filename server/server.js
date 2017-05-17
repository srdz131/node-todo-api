var express = require('express');
var bodyParser = require('body-parser');


var {mongoose}= require('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');


var app = express();

app.use(bodyParser.json());


app.post('/todos',(req,res)=>{
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((data)=>{
    res.send(data)
  },(err)=>{
    res.status(400).send(err);
  })
});



app.listen(3000, ()=>{
  console.log('You are on port 3000!');
})
