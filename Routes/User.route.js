const express =require("express")
const {Usermodel}=require("../Model/User.model")
const UserRouter=express.Router()
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
UserRouter.post("/register",async(req,res)=>{
    const {name,email,gender,password,city,age}=req.body
   try{
        bcrypt.hash(password, 5,async (err, hash)=> {
            // Store hash in your password DB.
            if(err){
                res.send({"msg":"something went wrong","err":err})
            }
            else{
                    const user =new Usermodel({name,email,gender,password:hash,city,age})
                    user.save()
                    res.send({"msg":"new user has benn register"})
            }
        });
   }catch(err){
      res.send({"msg":"something went wrong","err":err.massage})
   }
})

UserRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body
   try {
    
    const user =await Usermodel.find({ email})
        if(user.length>0){
            bcrypt.compare(password, user[0].password, (err, result)=> {
                if(result){
                    const  token = jwt.sign({ userid: user[0]._id }, 'masai');
                    res.send({"msg":"login success", "token": token});
                }
                else{
                    res.send({"msg":"somthing went wrong", })
                }
            });
        }
        else{
            res.send({"msg":"wrong crendential", })
        }

   } catch (error) {
    res.send({"msg":"wrong crendential", })
   }
})


module.exports={UserRouter}