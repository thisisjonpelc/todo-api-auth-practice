const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// var id = "5ac2c1fd99c0041d48cee06e11";
//
// if(!ObjectID.isValid(id)) {
//   console.log("ID not valid");
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log("Todos", todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log("Todo", todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log("Id not found");
//   }
//   console.log("ToDo by Id", todo);
// }).catch((e) => {
//   console.log(e);
// });

User.findById("5abeb1136a04d93724f630fa").then((user) => {
  if(!user){
    return console.log("User not found");
  }

  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => {
    console.log(e)
});
