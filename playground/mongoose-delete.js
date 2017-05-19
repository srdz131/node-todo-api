const {ObjectID}= require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result)=>{
  console.log(result);
})


Todo.findByIdAndRemove('591ef8ae9abdfd017120b386').then((todo)=>{
  console.log(todo);
})
