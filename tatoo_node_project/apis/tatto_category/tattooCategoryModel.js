const mongoose=require('mongoose')

var tattooCategorySchema=mongoose.Schema({
    // tattoo_name:{type:String,default:''},
    tattoo_type:{type:String,default:''}, 
    tattoo_image:{type:String,default:'tattooCategory/default.jpg'},
    category_status:{type:Boolean,default:false},
    created_at:{type:Date, default:Date.now()}
})

module.exports=mongoose.model('tattooCategory',tattooCategorySchema)