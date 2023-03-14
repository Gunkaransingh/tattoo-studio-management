const User=require('./userModel')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const saltRounds=10
const SECRET='tattoos_project'

userRegister=(req,res)=>{
    validator=''
    if(req.body.name=='' || req.body.name==undefined){
        validator+='valid name is required'
    }
    if(req.body.password=='' || req.body.password==undefined){
        validator+='valid password is required'
    }
    if(req.body.address=='' || req.body.address==undefined){
        validator+='valid address is required '
    }
    if(req.body.city=='' || req.body.city==undefined){
        validator+='valid city is required'
    }
    if(req.body.contact=='' || req.body.contact==undefined){
        validator+='valid contact is required'
    }
    if(req.body.email=='' || req.body.email==undefined){
        validator+='valid email is required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    User.findOne({'email':req.body.email})
    .then(data=>{
        if(data!=null){
            res.json({
                'status':409,
                'success':false,
                'message':'this user already exists'
            })
        }
    
    else{
        userObj= new User()
        userObj.name=req.body.name
        userObj.email=req.body.email
        userObj.contact=req.body.contact
        const hash=bcrypt.hashSync(req.body.password,saltRounds)
        userObj.password=hash
        userObj.user_type=2
        userObj.address=req.body.address
        userObj.city=req.body.city
        userObj.save()
        .then(userData=>{
            res.json({
                'status':200,
                'success':true,
                'message':'user registered successfully',
                'data':userData
            })
            console.log(userData)
        })
        .catch(err=>{
            res.json({
                'status':409,
                'success':false,
                'message':'user not registerd',
                'error ':String(err)
            })
        })
    }
    })
}
userLogin=(req,res)=>{
    validator=''
    if(req.body.email=='' || req.body.email==undefined){
        validator+='valid email is required'
    }
    if(req.body.password=='' || req.body.password==undefined){
        validator+='valid password is required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        User.findOne({'email':req.body.email})
        .then(userObj=>{
            if(userObj==null){
                res.json({
                    'status':409,
                    'success':false,
                    'message':'this email does not exists'
                })
            }
            else{
                if(bcrypt.compareSync(req.body.password,userObj.password)){
                    let payload={
                        name:userObj.email,
                        user_type:userObj.user_type,
                    }
                    let token=jwt.sign(payload, SECRET ,{
                        expiresIn:60*30
                    })
                    res.json({
                        'status':200,
                        'success':true,
                        'message':'user login successfully',
                        'data':userObj,
                        'token':token
                    })
                }
                else{
                    res.json({
                        'status':409,
                        'success':false,
                        'message':'incorrect password'
                    })
                }
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
}
module.exports={
    userRegister,
    userLogin
}