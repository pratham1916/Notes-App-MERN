const jwt = require("jsonwebtoken")

const auth = (req,res,next) =>{
    const token = req.headers.authorization
    if(token){
        jwt.verify(token,"masai",(err,decode)=>{
            if(err){
                res.status(400).json(err);
            }
            else{
                console.log(decode); 
                req.body.userID = decode.userID;
                req.body.username=decode.username;
                next();
            }
        })
    }
    else{
        res.status(400).json({msg:"You Need to Login.."});
    }
}

module.exports = {
    auth
}