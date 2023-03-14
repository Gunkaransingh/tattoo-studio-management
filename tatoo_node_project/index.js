const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors());
var router =express.Router
app.use(express.urlencoded({extended:false}))
const mongodb=require('./config/mongodb')
app.post('/check', function (req, res) {
  res.send('tattoo server')
})
const adminRoutes=require('./routes/adminRoutes')

app.use('/admin',adminRoutes)


const customerRoutes=require('./routes/customerRoutes')
app.use('/customer',customerRoutes)
app.listen(5000)


module.exports=router
console.log('server running at 5000')