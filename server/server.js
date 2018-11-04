//Library imports
var {ObjectID} = require('mongodb')
var express = require('express');
var bodyParser = require('body-parser');
//Local imports
var {mongoose} = require('./db/db');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

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

//Get id route
app.get('/todos/:id', (req,res)=>{
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(400).send();
  }
  Todo.findById(id).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=>{
    res.status(400).send();
  });
});

app.delete('/todos/:id', (req,res) =>{
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  Todo.findByIdAndRemove(id).then((todo) =>{
    if(!todo){
      return res.status(404).send();
    }
    res.send(todo);
  }).catch((e)=>{
    res.status(400).send();
  });
});

app.listen(port, ()=>{
  console.log(`Started on port ${port}`);
})

module.exports ={app};
