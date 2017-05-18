const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '591c6aa3e0c23be01b9d467b';

User.findById(id).then((user)=>{
  if(!user){
    return console.log('User not found!');
  }
  console.log(JSON.stringify(user,undefined,2));
}).catch((err)=>{
  console.log(err);
})
//
// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos:', todos);
// });
//
// Todo.findOne({
//  _id:id
// }).then((todo)=>{
//   console.log('Todo:', todo);
// });
//
// Todo.findById(id).then((todo)=>{
//   console.log('Todo by id', todo)
// })
