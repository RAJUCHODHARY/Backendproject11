// const mongoose =require('mongoose')

// const RegisterSchema =new mongoose.Schema({
//     name:String,
//     email:String,
//     password:String
// })

// const RegisterModel =mongoose.Model("register",RegisterSchema);
// module.exports=RegisterModel


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
  name:String,
  email:String,
  password:String
});

// Create model
const MyModel = mongoose.model('register', mySchema);

module.exports = MyModel;