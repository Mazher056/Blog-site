const jwt = require("jsonwebtoken");

const authMiddleware = (req,res, next)=>{
    const authheader = req.headers.authorization;
    
    if(!authheader|| !authheader.startsWith("Bearer")){
        return res.status(401).json({message:"Unauthorized: No token provided"});
    }

    const token = authheader.split(" ")[1];
    console.log(token);

    try {
        const decoded= jwt.verify(token, "thisissecretkey");

        req.user = decoded;
        next();
    } catch (error) {
        return res.start(401).json({message:"Unauthorized:Invalid token"});   
    }
};

module.exports = authMiddleware;