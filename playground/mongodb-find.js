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


  db.collection('Todos').find().toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  }, (err) =>{
    console.log('Unable to fetch todos',err);
  });

  db.collection('Users').find({name:'Benas'}).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  }, (err) =>{
    console.log('Unable to fetch todos',err);
  });

db.collection('Todos').find().count().then((count)=>{
  console.log('Todos count: ', count);
  console.log(JSON.stringify(docs,undefined,2));
}, (err) =>{
  console.log('Unable to fetch todos',err);
});
  //client.close();
});
