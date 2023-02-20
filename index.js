

const express =require("express")
  const {connection } =require("./Config/db")
  const {UserRouter}=require("./Routes/User.route")
  const {PostRouter}=require("./Routes/Post.route")
  const {authenticate}=require("../Backend/Middleware/authenticate")
 const app=express()
 require('dotenv').config()

app.use(express.json())


app.get("/", (req, res) => {
    res.send("welcome to home page")
})

 app.use("/users",UserRouter)
  app.use(authenticate)
 app.use("/posts",PostRouter)

app.listen(process.env.PORT,async()=>{
   try {
     await connection
      console.log(`server listening on ${process.env.PORT}`)
      console.log("connected to DB")
   } catch (error) {
    console.log(error)
   }
})

// //  {
// //     "name":"sumit",
// //        "email":"sumit@gmail.com",
// //        "gender":"male",
// //        "password":"sumit",
// //        "age":25,
// //        "city":"chanda"
// // }


