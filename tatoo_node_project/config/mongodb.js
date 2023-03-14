const mongoose=require('mongoose')

mongoose.set("strictQuery",false);
mongoose.connect('mongodb://127.0.0.1:27017/tatto_services',{
    useNewUrlParser:true, useUnifiedTopology:true}).then(res=>{console.log('connected to mongodb')}).catch(err=>{
        console.log('connection err',err)
    })




// 'mongodb://127.0.0.1:27017/