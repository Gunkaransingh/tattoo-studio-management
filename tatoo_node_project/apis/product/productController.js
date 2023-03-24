const Product=require('./productMdel')

addProduct=(req,res)=>{
    let productObj=new Product()
    productObj.product_name=req.body.product_name
    productObj.save()
    .then(productData=>{
        res.json({
            'status':200,
            'success':true,
            'message':'product added successfully',
            'data':productData
        })
      
    })
     .catch(err=>{
        res.json({
            'status':409,
            'success':false,
            'message':'product not added',
            'error':String(err)
        })
    })
}
module.exports={
    addProduct
}