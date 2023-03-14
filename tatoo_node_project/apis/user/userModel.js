const mongoose=require('mongoose')
var userSchema=mongoose.Schema({
    name:{type:String,default:''},
    email:{type:String,default:''},
    password:{type:String,default:''},
    address:{type:String,default:''},
    contact:{type:Number,default:''},
    city:{type:String,default:''},
    user_type:{type:Number,default:2},
    created_at:{type:Date,default:Date.now()}
})
module.exports=mongoose.model('user',userSchema)