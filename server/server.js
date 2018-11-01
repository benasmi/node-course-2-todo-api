//Library imports
var express = require('express');
var bodyParser = require('body-parser');
//Local imports
var {mongoose} = require('./db/db');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

//Middle-ware
app.use(bodyParser.json());

//Post route
app.post('/todos', (req,res)=>{

  var todo = new Todo({
    text: req.body.text,

  });

  todo.save().then((doc)=>{
      res.send(doc);
  }, (e)=>{
      res.status(400).send(e);
  });
});

//Get route
app.get('/todos', (req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  }, (e)=>{
    console.log("kazkas negerai");
    res.status(400).send(e);
  })
});


app.listen(3000, ()=>{
  console.log("Started on port 3000");
})

module.exports ={app};
