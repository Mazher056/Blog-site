const express = require("express");
const User = require("../Modules/user");
const verifypassword = require("../middlewares/auth");
const router = express.Router();
const jwt = require('jsonwebtoken')


router.get('/signin', (req, res) => {
    return res.send("Signin")
})

router.get('/signup', (req, res) => {
    return res.send("singup")
})

router.post('/login', verifypassword, async (req, res) => {

    const user = req.user;

    const token = jwt.sign({
        fullName:user.fullName,
        userId: user._id,
    }, "thisissecretkey", { expiresIn: "1h" });
    console.log("Token generataed")
    res.status(200).json({
        message: "Login Sucessfull",
        token,
        user
    });
});

router.post('/signup', async (req, res) => {
    const { fullName, email, password } = req.body;
    const userdata = await User.create({
        fullName,
        email,
        password
    });
    console.log("Date Came to backend " + userdata);
    return res.status(200).json({ "message": "User Registered Sucess" })
    
})

module.exports = router;