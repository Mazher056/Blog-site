const mongoose = require('mongoose')

const UserSchema =new mongoose.Schema({
    fullName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    profileImage:{
        type:String,
        default:"/images/default.jpg"
    },
    role:{
        type:String,
        enum:["USER","ADMIN" ],
        default:"USER"
    }

},
{timestamps:true})

UserSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    try {
        const salt = await bc
    } catch (error) {
        
    }
})



module.exports = User;