   const bcrypt=require("bcrypt")
   const jwt=require("jsonwebtoken")
  const z =require('zod')

   exports.signup=async (req ,res) => {
   //search krunga user 
   try{
   const {username,password}=req.body
   const user=await users.findOne(username)
   if(user){
      return res.status(400).json({
         message:"user already exists "
      })
   }

   //create
   const hashedpassword=await bcrypt.hash(password,10) 
   const newuser=await users.create({username,hashedpassword})
   //toekn 
   const token=jwt.sign({
      user._id
   },process.env.JWT_SECRET_KEY)
   res.json(token)
   }
   catch(err){
      res.status(500)
   }
      
      
      
      
      //search krunga user 
   //create 
   //toekn 

   module.exports=async (req,res)=>{
      try{  
       const {username,password}=req.body;
       const checkuser=await users.findone({username})
       if(!checkuser){
         return res.json(401).json{
            message:"plz sign up first"
         }
       }  
       const vereifyuser=await bcrypt.compare(checkuser.password,password)
       const token=jwt.sign({
            checkuser._id
       },process.env.JWT_SECRET_KEY)
      res.json({
         token
      })
   
   
   }
   catch(err){
      res.status.json({
            error:err.message
      })
   }
   }

