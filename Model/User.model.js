
const mongoose =require('mongoose');
mongoose.set('strictQuery', false)
const UserSchema= mongoose.Schema({
  name:{type:String,required:true},
  email:{type:String,required:true},
  gender:{type:String,required:true},
  password:{type:String,required:true},
  age:{type:Number,required:true},
  city:{type:String,required:true}
})

const Usermodel = mongoose.model("user",UserSchema)

module.exports = {Usermodel}