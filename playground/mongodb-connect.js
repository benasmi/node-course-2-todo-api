//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
  if(err){
    console.log("Unable to connect to the database server");
    return;
  }
  console.log("Connected to MongoDB server");

  const db = client.db('TodoApp');
/*
  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, results)=>{
    if(err){
      return console.log("Something went wrong", err);
    }
    console.log(JSON.stringify(results.ops, undefined, 2));
  });
*/
/*
  db.collection('Users').insertOne({
    name: 'Benas',
    age: 19,
    city: 'Kaunas'

  }, (err, results)=>{
    if(err){
      return console.log("Something went wrong", err);
    }
    console.log(JSON.stringify(results.ops[0]._id.getTimestamp(), undefined,2));

  })
*/
  client.close();
});
