const mongoose=require('mongoose')
var reviewSchema=mongoose.Schema({
    user_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        default:null,
    }],
    tattoo_pricingid:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'tattoo_pricing',
        default:null
    }],
    review:{type:String,default:''},
    review_status:{type:Boolean,default:false},
    created_at:{type:Date, default:Date.now()}
})
module.exports=mongoose.model('reviews',reviewSchema)