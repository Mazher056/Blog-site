const express = require("express");
const User = require("../Modules/user");
const router = express.Router();


router.get('/signin', (req, res) => {
    return res.send("Signin")
})

router.get('/signup', (req, res) => {
   return res.send("singup")
})

router.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    const userExists = await User.findOne({email});
    
    //console.log("User Available :", userExists);
    res.status(200).json({
        "message":"Data received form frontend"
    })
})

router.post('/signup', async (req, res) => {
    const { fullName, email, password } = req.body;
    const userdata = await  User.create({
        fullName,
        email,
        password
    });
    console.log("Backend Receives Data "+userdata);
    return res.status(200).json({"message":"User Registered Sucess"})
  
})

module.exports = router;