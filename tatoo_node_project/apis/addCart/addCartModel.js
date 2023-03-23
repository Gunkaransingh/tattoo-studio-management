const mongoose=require('mongoose')
const AddCartSchema=mongoose.Schema({
     
      user_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        default:null
      }],
      cart_items:[
        product_id=[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'product',
            default:null
        }],
        price={type:Number, default:''},
        quantity={type:Number,default:''}
      ],
      total_price:{type:Number,default:''}
})
module.exports=mongoose.model('addCart',AddCartSchema)