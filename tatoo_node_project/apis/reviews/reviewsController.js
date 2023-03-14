const Review=require('./reviewModel')

addReview=(req,res)=>{
    validator=''
    if(req.body.user_id=='' || req.body.user_id==undefined){
        validator+='valid user id is required'
    }
    if(req.body.tattoo_pricingid=='' || req.body.tattoo_pricingid==undefined){
        validator+='valid tattoo id is required'
    }
    if(req.body.review=='' || req.body.review==undefined){
        validator+='valid reviews are required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        let reviewObj=new Review()
        reviewObj.user_id=req.body.user_id
        reviewObj.tattoo_pricingid=req.body.tattoo_pricingid
        reviewObj.review=req.body.review
        reviewObj.save()
        .then(reviewData=>{
            res.json({
                'status':200,
                'success':true,
                'message':'review added successfully',
                'data':reviewData
            })
        })
        .catch(err=>{
            res.json({
                'status':409,
                'success':false,
                'message':'review not added successfully',
                'error':String(err)
            })
        })
    }
}
viewAllReview=(req,res)=>{
    Review.find(req.body).populate('user_id').populate('tattoo_pricingid').exec(function(err,data){
        if(err){
            res.json({
                'status':409,
                'success':false,
                'message':'no data in reviews',
                'error':String(err)
            })
        }
        else{
            res.json({
                'status':200,
                'success':true,
                'message':'view all data in reviews',
                'data':data
            })
        }
    })
}
veiwReviewById=(req,res)=>{
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
        Review.findOne({'_id':req.body._id}).populate('user_id').populate('tattoo_pricingid').exec(function(err,data){
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
                    'message':'view reviews by id ',
                    'data':data
                })
            }
        })
    }
}
updateReview=(req,res)=>{
    validator=''
    if(req.body.user_id=='' || req.body.user_id==undefined){
        validator+='valid user id is required'
    }
    if(req.body.tattoo_pricingid=='' || req.body.tattoo_pricingid==undefined){
        validator+='valid tattoo id is required'
    }
    if(req.body.review=='' || req.body.review==undefined){
        validator+='valid reviews are required'
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
        Review.findOne({'_id':req.body._id})
        .then(data=>{
            if(data!=null){
                data.user_id=req.body.user_id
                data.tattoo_pricingid=req.body.tattoo_pricingid
                data.review=req.body.review
                data.save()
                res.json({
                    'status':200,
                    'success':true,
                    'message':'reviews updated',
                    'data':data
                })
            }
            else{
                res.json({
                    'status':409,
                    'success':false,
                    'message':'invalid id '
                })
            }
        })
        .catch(err=>[
            res.json({
                'status':409,
                'success':false,
                'message':'error in api',
                'error':String(err)
            })
        ])
    }
}
changeReviewStatus=(req,res)=>{
    validator=''
    if(req.body._id=='' || req.body._id==undefined){
        validator+='valid _id required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        Review.findOne({'_id':req.body._id})
        .then(data=>{
            if(data!=null){
                data.review_status=req.body.review_status
                data.save()
                res.json({
                    'status':200,
                    'success':true,
                    'message':'review status changed ',
                    'data':data
                })
            }
            else{
                res.json({
                    'status':409,
                    'success':false,
                    'message':'invalid id '
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
    addReview,
    viewAllReview,
    veiwReviewById,
    updateReview,
    changeReviewStatus
}