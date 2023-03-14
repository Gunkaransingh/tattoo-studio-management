const mongoose=require('mongoose')
var tattooPricingSchema=mongoose.Schema({
    tattoo_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'tattooCategory',
        default:null
    }],
    tattoo_price:{type:Number,default:''},
    tattoo_price_status:{type:Boolean,default:false},
    created_at:{type:Date,default:Date.now()}
})
module.exports=mongoose.model('tattoo_pricing',tattooPricingSchema)