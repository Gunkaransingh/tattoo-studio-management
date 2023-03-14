const TatooPricing=require('./tattoo_pricingModel')

addTattooPricing=(req,res)=>{
    validator=''
    if(req.body.tattoo_id=='' || req.body.tattoo_id==undefined){
        validator+='valid tattoo id is required'
    }
    if(req.body.tattoo_price=='' || req.body.tattoo_price==undefined){
        validator+='valid tattoo price is required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        tattooPricingObj=new TatooPricing()
        tattooPricingObj.tattoo_id=req.body.tattoo_id
        tattooPricingObj.tattoo_price=req.body.tattoo_price
        tattooPricingObj.save()
        .then(tattooPricingData=>{
            res.json({
                'status':200,
                'success':true,
                'message':'tattoo prices added successfully',
                'data':tattooPricingData
            })
        })
        .catch(err=>{
            res.json({
                'status':409,
                'success':false,
                'message':'tattoo prices not added successfully',
                'error':String(err)
            })
        })
    }
}
viewAllTattooPricing=(req,res)=>{
    TatooPricing.find(req.body).populate('tattoo_id').exec(function(err,data){
        if(err){
            res.json({
                'status':409,
                'success':false,
                'message':'no data in tattoos pricing',
                'error':String(err)
            })
        }
        else{
            res.json({
                'status':200,
                'success':true,
                'message':'view al tatoos pricing ',
                'data':data
            })
        }
    })
}
viewTattooPricingById=(req,res)=>{
    validator=''
    if(req.body._id=='' || req.body._id==undefined){
        validator+='valid _id is required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        TatooPricing.findOne({'_id':req.body._id}).populate('tattoo_id').exec(function(err,data){
            if(err){
                res.json({
                    'status':409,
                    'success':false,
                    'message':'invalid id',
                    'error':String(err)
                })
            }
            else{
                res.json({
                    'status':200,
                    'success':true,
                    'message':'view tattoo pricing by id ',
                    'data':data
                })
            }
        })
    }
}
updateTattooPricing=(req,res)=>{
    validator=''
    if(req.body.tattoo_id=='' || req.body.tattoo_id==undefined){
        validator+='valid tattoo id is required'
    }
    if(req.body.tattoo_price=='' || req.body.tattoo_price==undefined){
        validator+='valid tattoo price is required'
    }
    if(req.body._id=='' || req.body._id==undefined){
        validator+='valid _id is required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        TatooPricing.findOne({'_id':req.body._id})
        .then(data=>{
            if(data!=null){
                data.tattoo_id=req.body.tattoo_id
                data.tattoo_price=req.body.tattoo_price
                data.save()
                res.json({
                    'status':200,
                    'success':true,
                    'message':'tattoo prices updated',
                    'data':data
                })
            }
            else{
                res.json({
                    'status':409,
                    'success':false,
                    'message':'invalid id'
                })
            }
        })
        .catch(err=>{
            res.json({
                'status':409,
                'success':false,
                'mesage':'error in api',
                'error':String(err)
            })
        })
    }
}
changePricingStatus=(req,res)=>{
    validator=''
    if(req.body._id=='' || req.body._id==undefined){
        validator+='valid _id is required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        TatooPricing.findOne({'_id':req.body._id})
        .then(data=>{
            if(data!=null){
                data.tattoo_price_status=req.body.tattoo_price_status
                data.save()
                res.json({
                    'status':200,
                    'success':true,
                    'message':'pricing status changed',
                    'data':data
                })
            }
            else{
                res.json({
                    'status':409,
                    'success':false,
                    'message':'invalid id'
                })
            }
        })
        .catch(err=>{
            res.json({
                'status':409,
                'success':false,
                'message':'error in api',
                'error':String(err)
            })
        })
    }
}
module.exports={
    addTattooPricing,
    viewAllTattooPricing,
    viewTattooPricingById,
    updateTattooPricing,
    changePricingStatus
}