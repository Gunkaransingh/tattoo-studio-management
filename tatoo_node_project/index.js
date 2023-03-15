const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors());
var router =express.Router
app.use(express.urlencoded({extended:false}))
app.use(express.json())
const mongodb=require('./config/mongodb')
app.post('/check', function (req, res) {
  res.send('tattoo server')
})
const adminRoutes=require('./routes/adminRoutes')
const seeder=require('./config/seeder')
seeder.addUser()
app.use('/admin',adminRoutes)


const customerRoutes=require('./routes/customerRoutes')
app.use('/customer',customerRoutes)
app.listen(5000)


module.exports=router
console.log('server running at 5000')