const mongoose = require("mongoose")


const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Usermodel",
        required:true
        
    },
    image:{
        type:String,
        // C:\Users\ra103\Web\blog\Server\Public\image\theme-photos-Cl-OpYWFFm0-unsplash.jpg
        default:"./image/theme-photos-Cl-OpYWFFm0-unsplash.jpg"
        
    },
    publishedAt: {
        type: Date
    }
}, { timestamps: true })

const blogModel = new mongoose.model('post',blogSchema);
module.exports =blogModel;