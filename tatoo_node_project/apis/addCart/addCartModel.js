const mongoose=require('mongoose')
const AddCartSchema=mongoose.Schema({
     
      user_id:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        default:null
      }],
      cart_items:[
        price={type:Number},
        quantity={type:Number},
        // product_id=[{
        //   type:mongoose.Schema.Types.ObjectId,
        //   ref:'product',
        //   default:''
        // }]
      ],
      total_price:{type:Number}
})
module.exports=mongoose.model('addCart',AddCartSchema)