const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const UserSchema=new Schema({
    Fullname:{
        type:String,
        required:true
    },
    Phonenumber:{
        type:Number,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    Addess:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Country:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    Zipcode:{
        type:Number,
        required:true
    },
    img:
    {
        type:String,
        required:true
    }
})
const User=mongoose.model("User",UserSchema);
module.exports=User;