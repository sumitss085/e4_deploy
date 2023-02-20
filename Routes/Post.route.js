
const express =require("express")
const { Postmodel } = require("../Model/Post.model")
const jwt=require("jsonwebtoken")

const PostRouter =express.Router()

PostRouter.get("/",async(req,res)=>{
    
       try {
        const token =req.headers.authorization
        jwt.verify(token, 'masai', async(err, decoded)=> {
            if(decoded){

                const posts=await Postmodel.find({user:decoded.userid})
                res.send(posts)
            }
          })
       } catch (error) {
         res.send(error)
       }
})

PostRouter.post("/create",async(req,res)=>{
    //  const payload =req.body
    //  console.log(payload)
    
     try {
        const newpost=new Postmodel(req.body)
        await newpost.save()
        res.send({"msg":"new post created successfully"})

     } catch (error) {
        res.send({"msg":"something went wrong",error})
     }
})


PostRouter.get("/top",(req,res)=>{
    
})


PostRouter.patch("/update/:id ",async(req,res)=>{
    const id=req.params.id;
    const payload=req.body
    try {
        await Postmodel.findByIdAndUpdate(id,payload)
        res.send("post updated successfully")
    } catch (error) {
        res.send(error.message)
    }
})

PostRouter.delete("/delete/:id ",async(req,res)=>{
    const id=req.params.id;
  
    try {
        await Postmodel.findByIdAndDelete(id)
        res.send("post deleted successfully")
    } catch (error) {
        res.send(error.message)
    } 
})


module.exports={PostRouter}