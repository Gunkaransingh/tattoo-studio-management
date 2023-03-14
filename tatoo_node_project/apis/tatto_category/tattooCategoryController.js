// const TattooCategory = require('./tattooCategoryModel')
const TattooCategory=require('./tattooCategoryModel')


addTattoosCategory=(req,res)=>{
    validator=''
    if(req.body.tattoo_type=='' || req.body.tattoo_type==undefined){
        validator+='valid tatoo type is required'
    }
    if(req.file==''|| req.file==undefined){
        validator+='valid tattoo type is required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        TattooCategory.findOne({'tattoo_type':req.body.tattoo_type})
        .then(data=>{
            if(data!=null){
                res.json({
                    'status':409,
                    'success':false,
                    'message':'this tattoo already exists '
                })
            }
            else{
                let tattooCategoryObj=new TattooCategory()
                tattooCategoryObj.tattoo_type=req.body.tattoo_type
                let image='tattooCategory/default.jpg'
                if(req.file!=undefined && req.file!= undefined){
                    image='tattooCategory/' +req.file.filename
                }
                tattooCategoryObj.tattoo_image=image
                tattooCategoryObj.save()
                .then(tattooData=>{
                    res.json({
                        'status':200,
                        'success':true,
                        'message':'tattoo added successfully',
                        'data':tattooData
                    })
                })
                .catch(err=>{
                    res.json({
                        'status':409,
                        'success':false,
                        'message':'tattoo not added successfully',
                        'error':String(err)
                    })
                })
            }
        })
    }
}
viewAllTattoosCategory = (req, res) => {
    TattooCategory.find(req.body).exec(function (err, data) {
        if (err) {
            res.json({
                'status': 409,
                'success': false,
                'message': 'no data in tattoos category',
                'error': String(err)
            })
        }
        else {
            res.json({
                'status': 200,
                'success': true,
                'message': 'view all tattoos category',
                'data': data
            })
        }
    })
}
viewTattoosCategoryById = (req, res) => {
    TattooCategory.findOne({'_id':req.body._id})
        .then(data => {
            if (data != null) {
                res.json({
                    'status': 200,
                    'success': true,
                    'message': 'view tattoos category by id ',
                    'data': data
                })
                console.log(req.body._id)
            }
            else {
                res.json({
                    'status': 409,
                    'success': false,
                    'message': 'invalid id '
                })
            }
        })
        .catch(err => {
            res.json({
                'status': 409,
                'success': false,
                'message': 'error in api',
                'error': String(err)
            })
        })

}
updateTattoosCategory=(req,res)=>{
    TattooCategory.findOne({'_id':req.body._id})
    .then(data=>{
        if(data!=null){
            data.tattoo_type=req.body.tattoo_type
            let image=data.tattoo_image
            if(req.file!=undefined && req.file.filename!=undefined){
                image='tattooCategory/' +req.file.filename
            }
            data.tattoo_image=image
            data.save()
            res.json({
                'status':200,
                'success':true,
                'message':'tattoo category updated',
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
            'error ':String(err)
        })
    })
}



changeTattoosCategoryStatus=(req,res)=>{
    validator=''
    if(req.body._id=='' || req.body._id==undefined){
        validator+='valid _id is required'
    }
    if(req.body.category_status=='' || req.body.category_status==undefined){
        validator+='valid category status is required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        TattooCategory.findOne({'_id':req.body._id})
        .then(data=>{
            if(data!=null){
              data.category_status=req.body.category_status
              data.save()
              res.json({
                'status':200,
                'success':true,
                'message':'tattoo category status changed',
                'data':data
              })
            }
            else{
                res.json({
                    'status':409,
                    'success':false,
                    'message':'invalid id ',
                    
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
module.exports = {
    addTattoosCategory,
    viewAllTattoosCategory,
    viewTattoosCategoryById,
    updateTattoosCategory,
    changeTattoosCategoryStatus
    
}