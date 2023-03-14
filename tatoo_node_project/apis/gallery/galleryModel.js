const mongoose=require('mongoose')
var gallerySchema=mongoose.Schema({
    tattoo_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'tattooCategory',
        default:null
    }],
    gallery_name:{type:String,default:''},
    gallery_status:{type:Boolean,default:false},
    created_at:{type:Date,default:Date.now()}
})
module.exports=mongoose.model('gallery',gallerySchema)