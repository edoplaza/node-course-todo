const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id ='5b239212adb20711966d0bea11';

User.findById(id).then((user) => {
  if(!user) {
    return console.log('There are no users')
  }
  console.log('User', user)
}).catch((e) => {
  console.log('error')
})


// let id = '5b27ddfa956e69f74da4318711';
//
// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found')
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e))
