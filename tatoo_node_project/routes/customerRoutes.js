

const router = require('express').Router()
const BookingController=require('../apis/booking/bookingController')
const UserController=require('../apis/user/userController')
const ReviewController=require('../apis/reviews/reviewsController')
const tattooCategoryController=require('../apis/tatto_category/tattooCategoryController')
const galleryController=require('../apis/gallery/galleryController')
const tattooPricingController=require('../apis/tattoo_pricing/tattoo_pricingController')


const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/booking')
    },
    filename: function (req, file, cb) {
  
      let extension = path.extname(file.originalname)
      console.log('des',req.body.name)
      const newname = req.body.name + '-' + Date.now() + extension;
      cb(null, newname)
    }
  })
  const upload = multer({ storage: storage })




//  register and login routes in customer panel starts 
router.post('/userRegister',UserController.userRegister)
router.post('/userLogin',UserController.userLogin)
// register and login routes in customer panel ends 


// booking routes in customer panel starts 
router.post('/addBooking',upload.single('sample_design'),BookingController.addBooking)
router.post('/viewAllBooking',BookingController.viewAllBooking)
router.post('/viewBookingById',BookingController.viewBookingById)
// booking routes ni customer panel ends 

// reviews routes in customer panel starts 
router.post('/addReviews',ReviewController.addReview)
router.post('/viewAllReview',ReviewController.viewAllReview)
router.post('/veiwReviewById',ReviewController.veiwReviewById)
router.post('/updateReview',ReviewController.updateReview)
// reviews routes in customer panel ends 


// tattoos category routes in customer panel starts 
router.post('/viewAllTattoosCategory',tattooCategoryController.viewAllTattoosCategory)
router.post('/viewTattoosCategoryById',tattooCategoryController.viewTattoosCategoryById)
// tattoos category routes in customer panel ends 


// gallery routes in customer panel starts 
router.post('/viewAllGallery',galleryController.viewAllGallery)
router.post('/viewGalleryById',galleryController.viewGalleryById)
// gallery routes in customer panel ends 

// tattoos pricing routes in customer panel starts 
router.post('/viewAllTattooPricing',tattooPricingController.viewAllTattooPricing)
router.post('/viewTattooPricingById',tattooPricingController.viewTattooPricingById)
module.exports=router