//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if(err){
    return console.log("Uable to connect to MongoDB server");
  }

  console.log("Connected to MongoDB server");
  const db = client.db("TodoApp");

  // db.collection("Todos").findOneAndUpdate({
  //   _id: new ObjectID("5abe95431b384c1019230930")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection("Users").findOneAndUpdate({
    _id: new ObjectID("5abe87ecb9a85a52f02c9ace")
  }, {
    $set: {
      name: "Jon"
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //client.close();
});
