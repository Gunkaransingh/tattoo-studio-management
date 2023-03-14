const mongoose=require('mongoose')
var bookingSchema=mongoose.Schema({
    user_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        default:null
    }],
    pricing_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'tattoo_pricing',
        default:null
    }],
    name:{type:String,default:''},
    booking_data:{type:Date,default:Date.now()},
    sample_design:{type:String,default:'booking/default.jpg'},
    booking_status:{type:String,default:'pending'}
})
module.exports=mongoose.model('booking',bookingSchema)