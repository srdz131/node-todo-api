const {ObjectID} = require('mongodb');

var express = require('express');
var bodyParser = require('body-parser');


var {mongoose}= require('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');


var app = express();

const port = process.env.PORT || 3000;

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

  app.get('/todos', (req,res)=>{
    Todo.find().then((todos)=>{
      res.send({todos});
    }, (err)=>{
      res.status(400).send(e);
    }
  )});

  app.get('/todos/:id', (req,res)=>{
    var id = req.params.id;
    var valid = ObjectID.isValid(id);
    if(!valid){
      return res.send('Id not valid.');
    };
    Todo.findById(id).then((todo)=>{
      if(!todo){
      return res.status(404).send('Todo not found.');
    }
      res.send({todo});

    }, (err)=>{
      console.log(err);
    }).catch((err)=>{
      console.log('ERROR MESSAGE: ',err )
    })

  })

  app.delete('/todos/:id', (req,res)=>{
    var id = req.params.id;
    var valid = ObjectID.isValid(id);
    if(!valid){
      return res.status(400).send('Not valid id.');
    }
    Todo.findByIdAndRemove(id).then((todo)=>{
      if(!todo){
      return res.status(404).send('Id not found.');
    }
      res.send({todo});

    }).catch((e)=>{
      res.status(400).send()
    })
  })

app.listen(port, ()=>{
  console.log(`You are on port ${port}`);
})

module.exports = {app};
