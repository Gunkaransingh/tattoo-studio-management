const AddCart = require('./addCartModel')

addCart = (req, res) => {
    let cart_data = {
        user_id:req.body.user_id,
        cart_items: typeof (req.body.cart_items) ? JSON.stringify((req.body.cart_items)):JSON.parse(req.body.cart_items)
    }

    console.log(cart_data.cart_items)

    let add_cart = new AddCart(cart_data)
    let cart_size = cart_data.cart_items.length
    // console.log(cart_data.cart_items.length)
    

    for (i = 0; i < cart_size; i++) {
        let amount = 0
        amount = Number(cart_data.cart_items[i].price)
        product_id=cart_data.cart_items[i].product_id
        quantity=cart_data.cart_items[i].quantity
        add_cart.total_price=amount * quantity
        // console.log(add_cart.total_price)
    }
    return
    add_cart.save()
    .then(cartdata=>{
        res.json({
            'status':200,
            'success':true,
            'data':cartdata,
            'message':'cart added '
        })
    })
    .catch(err=>{
        res.json({
            'status':409,
            'success':false,
            'message':'cart not added',
            'error':String(err)
        })
    })

}
module.exports={
    addCart
}