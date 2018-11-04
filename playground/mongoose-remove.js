const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/db');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
/*
Todo.remove({}).then((result) =>{
  console.log(result);
});
*/

Todo.findByIdAndRemove('5bdf56b4c96350001625ff39').then((doc)=>{

});
