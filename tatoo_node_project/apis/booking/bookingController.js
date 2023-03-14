const Booking = require('./bookingModel')

addBooking = (req, res) => {
    validator = ''
    if (req.body.name == '' || req.body.name == undefined) {
        validator += 'valid name is required'
    }
    if (req.body.user_id == '' || req.body.user_id == undefined) {
        validator += 'valid user id is required'
    }
    if (req.body.pricing_id == '' || req.body.pricing_id == undefined) {
        validator += 'valid pricing id is required'
    }
    if (!!validator) {
        res.json({
            'status': 409,
            'success': false,
            'message': validator
        })
    }
    else {
        let bookingObj = new Booking()
        bookingObj.name = req.body.name
        bookingObj.user_id = req.body.user_id
        bookingObj.pricing_id = req.body.pricing_id
        let image = 'booking/default.jpg'
        if (req.file != undefined && req.file.filename != undefined) {
            image = 'booking/' + req.file.filename
        }
        bookingObj.sample_design = image
        bookingObj.save()
            .then(bookingData => {
                res.json({
                    'status': 200,
                    'success': true,
                    'message': 'new booking added successfully',
                    'data': bookingData
                })
            })
            .catch(err => {
                res.json({
                    'status': 409,
                    'success': false,
                    'message': 'booking not added successfully',
                    'error': String(err)
                })
            })
    }
}
viewAllBooking=(req,res)=>{
    Booking.find().populate('user_id').populate('pricing_id').exec(function(err,data){
        if(err){
            res.json({
                'status':409,
                'success':false,
                'message':'no data in booking',
                'error':String(err)
            })
        }
        else{
            res.json({
                'status':200,
                'success':true,
                'message':'view all data in booking',
                'data':data
            })
        }
    })
}
viewBookingById=(req,res)=>{
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
        Booking.findOne({'_id':req.body._id}).populate('pricing_id').populate('user_id').exec(function(err,data){
            if(err){
                res.json({
                    'status':409,
                    'success':false,
                    'message':'invalid id ',
                    'error':String(err)
                })
            }
            else{
                res.json({
                    'status':200,
                    'success':true,
                    'message':'view booking by id ',
                    'data':data
                })
            }
        })
    }
}
changeBookingStatus=(req,res)=>{
    validator=''
    if(req.body._id=='' || req.body._id==undefined){
        validator+='valid _id is required'
    }
    if(req.body.booking_status=='' || req.body.booking_status==undefined){
        validator+='valid booking status is required'
    }
    if(!!validator){
        res.json({
            'status':409,
            'success':false,
            'message':validator
        })
    }
    else{
        Booking.findOne({'_id':req.body._id})
        .then(data=>{
            if(data!=null){
                data.booking_status=req.body.booking_status
                data.save()
                res.json({
                    'status':200,
                    'success':true,
                    'message':'booking status changed',
                    'data':data
                })
            }
            else{
                res.json({
                    'status':409,
                    'success':false,
                    'message':'invalid _id '
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
    addBooking,
    viewAllBooking,
    viewBookingById,
    changeBookingStatus
}