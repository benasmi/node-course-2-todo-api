const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


var password = '123abc';

//hash pass
// bcrypt.genSalt(10,(err,salt)=>{
//   bcrypt.hash(password,salt,(err,hash)=>{
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$kpLcB/uq1owo2DE7L/wzye9ZbPbCOnuX/pLaTrDguNpk4zoyL8SA2';

bcrypt.compare(password, hashedPassword,(err,res)=>{
  console.log(res);
});

// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);


/*
var message = "I am user number 3";
var hash = SHA256(message).toString();

console.log("Message: ",message);
console.log("Hashed message", hash);

var data = {
  id: 4
};
var token = {
  data,
  hash: SHA256(JSON.stringify(data) + 'someSecret').toString()
}

////Middle man///// Does not have secret, which is on server
token.data.id = 5;
token.hash = SHA256(JSON.stringify(token.data)).toString();
///////////////////

var resultHash = SHA256(JSON.stringify(token.data)+'someSecret').toString();

if(resultHash === token.hash){
  console.log('Data was not changed');
}else{
  console.log('Data was changed');
}
*/
