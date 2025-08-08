const User = require("../Modules/user");
const bcrypt = require("bcrypt");

const verifypassword = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (!userExists) {
            return res.status(404).json({
                message: "User Doesn't Exists"
            })
        }
        //console.log(userExists)
        const isMatch = await bcrypt.compare(password, userExists.password);
        req.user = userExists;
        next();
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid Passowrd" });
        }
    }catch(e){
        console.log("Error in auth Middleware");
        return res.status(500).json({message:"Internal Server Error"})
    }
}


module.exports = verifypassword;