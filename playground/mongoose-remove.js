const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//   console.log(result)
// });

// Todo.findOneAndremove({_id: '5b2a3d2324ba2649b6670460'})
//
// Todo.findByIdAndRemove('5b2a3d2324ba2649b6670460').then((todo) => {
//   console.log(todo);
//
// })
