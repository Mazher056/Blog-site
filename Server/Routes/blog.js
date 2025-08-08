const express = require("express");
const blogModel = require("../Modules/blogmodel");
const authMiddleware = require("../middlewares/authmiddleware");
const blogRoute = express.Router();


blogRoute.post('/blogpost', authMiddleware,async (req, res) => {

    try {
        const { title, description } = req.body;
        const userId = req.user.userId;

        
        console.log("Got data ", title, " ", description)


        const blogdata = new blogModel({
            title, description,userId
        })


        const savedBlog = await blogdata.save();

        console.log("Data saved " + savedBlog);
        res.status(200).json({
            message: "Sucessfully received to backend",

        })
    } catch (e) {
        console.log("Error while saving the blog " + e);
        res.status(500).json({
            message: "Failed to create blog"
        })
    }

})


module.exports = blogRoute;