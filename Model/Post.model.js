
const mongoose =require('mongoose');
mongoose.set('strictQuery', false)
const PostSchema= mongoose.Schema({
  title:{type:String},
  body:{type:String},
  device:{type:String},
  no_if_comments :{type:Number},
  user:{type:String},
   
})

const Postmodel = mongoose.model("post",PostSchema)

module.exports = {Postmodel}


// {
//   "title":"sfgb",
//   "body":"sumit",
//   "device":"mobile",
//   "no_if_comments":5
// }