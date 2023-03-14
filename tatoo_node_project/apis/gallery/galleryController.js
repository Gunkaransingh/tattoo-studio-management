const Gallery=require('./galleryModel')

addGallery=(req,res)=>{
    validator=''
    if(req.body.tattoo_id==''  || req.body.tattoo_id==undefined){
        validator+='valid tattoo id is required'
    }
    if(req.body.gallery_name=='' || req.body.gallery_name==undefined){
        validator+='valid gallery name is required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        Gallery.findOne({'gallery_name':req.body.gallery_name})
        .then(data=>{
            if(data!=null){
                res.json({
                    'status':409,
                    'success':false,
                    'message':'this gallery already exists'
                })
            }
            else{
                galleryObj=new Gallery()
                galleryObj.tattoo_id=req.body.tattoo_id
                galleryObj.gallery_name=req.body.gallery_name
                galleryObj.save()
                .then(galleryData=>{
                    res.json({
                        'status':200,
                        'success':true,
                        'message':'gallery added successfully',
                        'data':galleryData
                    })
                })
                .catch(err=>{
                    res.json({
                        'status':409,
                        'success':false,
                        'message':'gallery not added successfully',
                        'error':String(err)
                    })
                })
            }
        })
        .catch(error=>{
            res.json({
                'status':409,
                'success':false,
                'message':'error in api',
                'error':String(error)
            })
        })
    }
}
viewAllGallery=(req,res)=>{
    Gallery.findOne({'tattoo_id':req.body.tattoo_id})
    .then(data=>{
        if(data!=null){
            res.json({
                'status':200,
                'success':true,
                'message':'view gallery with respectives to tattoos',
                'data':data
            })
        }
        else{
            Gallery.find(req.body).populate('tattoo_id').exec(function(err,data){
                if(err){
                    res.json({
                        'status':409,
                        'success':false,
                        'message':'no data in gallery ',
                        'error':err
                    })
                }
                else{
                    res.json({
                        'status':200,
                        'success':true,
                        'message':'view all data in gallery ',
                        'data':data
                    })
                }
            })
        }
    })
}
viewGalleryById=(req,res)=>{
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
        Gallery.findOne({'_id':req.body._id}).populate('tattoo_id').exec(function(err,data){
            if(err){
                res.json({
                    'status':409,
                    'success':false,
                    'message':'invalid id ',
                    'error':err
                })
            }
            else{
                res.json({
                    'status':200,
                    'success':true,
                    'message':'view gallery by id',
                    'data':data
                })
            }
        })
    }
}
updateGallery=(req,res)=>{
    validator=''
    if(req.body.tattoo_id==''  || req.body.tattoo_id==undefined){
        validator+='valid tattoo id is required'
    }
    if(req.body.gallery_name=='' || req.body.gallery_name==undefined){
        validator+='valid gallery name is required'
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
        Gallery.findOne({'_id':req.body._id})
        .then(data=>{
            if(data!=null){
                data.tattoo_id=req.body.tattoo_id
                data.gallery_name=req.body.gallery_name
                data.save()
                res.json({
                    'status':200,
                    'succes':true,
                    'message':'gallery updated successfully',
                    'data':data
                })
            }
            else{
                res.json({
                    'status':409,
                    'success':false,
                    'message':'invalid id',
                    
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
changeGalleryStatus=(req,res)=>{
    validator=''
    if(req.body._id=='' || req.body._id==undefined){
        validator+='valid _id is required'
    }
    if(req.body.gallery_status=='' || req.body.gallery_status==undefined){
        validator+='valid gallery status is required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        Gallery.findOne({'_id':req.body._id})
        .then(data=>{
            if(data!=null){
                data.gallery_status=req.body.gallery_status
                data.save()
                res.json({
                    'status':200,
                    'success':true,
                    'message':'gallery status changed',
                    'data':data
                })
            }
            else{
                res.json({
                    'status':409,
                    'success':false,
                    'message':'invalid id',

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
    addGallery,
    viewAllGallery,
    viewGalleryById,
    updateGallery,
    changeGalleryStatus
}