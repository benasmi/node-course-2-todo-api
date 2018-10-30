//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
  if(err){
    console.log("Unable to connect to the database server");
    return;
  }
  console.log("Connected to MongoDB server");
  const db = client.db('TodoApp');

db.collection('Todos').findOneAndUpdate({_id:new ObjectID('5bd826c5a6ded440cb9827ef')},
{
  $set:{
   completed:true
  }
},
{returnOriginal:false}).then((result)=>{
  console.log(result);
})

  client.close();
});
