const jwt=require('jsonwebtoken')
module.exports=(req,res,next)=>{
    const token=req.headers['authorization']
    if(token){
        jwt.verify(token,'tattoos_project',function(err,decoded){
            if(err){
                return res.json({
                    'status':false,
                    'message':'Unauthorized Access'
                })
            }
            req.decoded=decoded
            if(req.decoded.user_type==1){
                next()
            }
            else{
                res.json({
                    'status':false,
                    'message':'Unathorized'
                })
            }
        })
    }
    else{
        return res.json({
            'status':403,
            'success':false,
            'message':"UnAutorized. Token Invalid"
        })
    }
}