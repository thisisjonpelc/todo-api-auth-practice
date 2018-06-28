//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if(err){
    return console.log("Uable to connect to MongoDB server");
  }

  console.log("Connected to MongoDB server");
  const db = client.db("TodoApp");

  // db.collection("Todos").find({
  //   _id: new ObjectID("5abe8cc71b384c101923056a")}).toArray().then((docs) => {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("unable to fetch todos", err);
  // });

  // db.collection("Todos").find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //   }, (err) => {
  //   console.log("unable to fetch todos", err);
  // });

  db.collection("Users").find({name: "Violet"}).toArray().then((docs) => {
    console.log("Users");
    console.log(JSON.stringify(docs, undefined , 2));
  }, (err) => {
    console.log("unable to fetch users", err);
  })

  //client.close();
});
