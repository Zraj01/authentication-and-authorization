//check krte hain 
//export 
//4/10
const jwt=require("jsonwebtoken")
const doten=require("dotenv")
configDotenv.config()
const authmiddleware=(req,res,next)=>{
    const authheader=req.headers.authorization;
    if(!authheader){
        res.status(401).json({
            message:"unauthorized access"
        })   
    }
    const token=authheader.split("")[1]
    const decodeuser=jwt.verify(token,process.env.JWT_SECRET_KEY)
    if(!decodeuser){
        res.status(401).json({
            message:"unaotuhorized access"
        })
    }
    res.user=decodeuser       
    next();

}
modules.exports=authmiddleware