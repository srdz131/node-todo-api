const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


var password = '123abc';

bcrypt.genSalt(10, (err,salt)=>{
  bcrypt.hash(password, salt, (err, hash)=>{
    console.log(hash);
  })
})

var hahsedPassword = '$2a$10$wtrbQa6FRyXrgKUgElkzh.KtMaFf.NM9quA3YPt.61fnyr7IBjRRq'
bcrypt.compare(password,hahsedPassword,(err,res)=>{
  console.log(res);
})
//
// var data = {
//   id: 5
// };
//
// var token = jwt.sign(data,'124abc');
// console.log(token);
//
// var decoded = jwt.verify(token,'124abc');
// console.log(decoded)
// //
// // var message = "I want to find job";
// // var hash = SHA256(message).toString();
// // console.log(`Message : ${message}`);
// // console.log(`Message : ${hash}`);
// //
// //
// // var data = {
// //   id: 4
// // };
// //
// // var token = {
// //   data,
// //   hash: SHA256(JSON.stringify(data)+"saltsalt").toString()
// // };
// //
// // var resultHash = SHA256(JSON.stringify(token.data)+'saltsalt').toString();
// //
// // if(resultHash === token.hash){
// //   console.log('data was not changed');
// // }else{
// //   console.log('data was changed. do not trust');
// // }
