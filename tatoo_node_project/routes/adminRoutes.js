const router = require('express').Router()
const tattooCategoryController=require('../apis/tatto_category/tattooCategoryController')
const galleryController=require('../apis/gallery/galleryController')
const tattooPricingController=require('../apis/tattoo_pricing/tattoo_pricingController')
const ReviewController=require('../apis/reviews/reviewsController')
const BookingController=require('../apis/booking/bookingController')
const UserController=require('../apis/user/userController')
const ProductController=require('../apis/product/productController')
const AddCartController=require('../apis/addCart/addCartController')
const multer = require('multer')
const path = require('path')



//  tattoos category multer starts 
const tattoosStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/tattooCategory')
  },
  filename: function (req, file, cb) {

    let extension = path.extname(file.originalname)
    const newname = req.body.tattoo_type + '-' + Date.now() + extension;
    // console.log(req.body.tattoo_name , 'name')
    cb(null, newname)
  }
})
const tattoosUpload = multer({ storage: tattoosStorage })
// tattoos category multer ends 
router.get('/',(req,res)=>{
  
    console.log('chedck')
})
// admin routes 
router.post('/adminLogin',UserController.userLogin)
router.use(require('../common/admin_middleware'))


// tattoo category routes in admin panel starts 

router.post('/addTattoosCategory',tattoosUpload.single('tattoo_image'),tattooCategoryController.addTattoosCategory)
router.post('/viewAllTattoosCategory',tattooCategoryController.viewAllTattoosCategory)
router.post('/viewTattoosCategoryById',tattooCategoryController.viewTattoosCategoryById)
router.post('/updateTattoosCategory',tattoosUpload.single('tattoo_image'),tattooCategoryController.updateTattoosCategory)
router.post('/changeTattoosCategoryStatus',tattooCategoryController.changeTattoosCategoryStatus)


// tattoo category routes in admin panel ends 


// gallery routes in admin panel starts 
router.post('/addGallery',galleryController.addGallery)
router.post('/viewAllGallery',galleryController.viewAllGallery)
router.post('/viewGalleryById',galleryController.viewGalleryById)
router.post('/updateGallery',galleryController.updateGallery)
router.post('/galleryStatuschange',galleryController.changeGalleryStatus)
// gallery routes in admin panel ends 

// tattoo pricing routes in admin panel starts 
router.post('/addTattooPricing',tattooPricingController.addTattooPricing)
router.post('/viewAllTattooPricing',tattooPricingController.viewAllTattooPricing)
router.post('/viewTattooPricingById',tattooPricingController.viewTattooPricingById)
router.post('/updateTattooPricing',tattooPricingController.updateTattooPricing)
router.post('/changePricingStatus',tattooPricingController.changePricingStatus)
// tattoos pricing routes in admin panel ends 

// review routes in admin panel starts 
router.post('/viewAllReview',ReviewController.viewAllReview)
router.post('/veiwReviewById',ReviewController.veiwReviewById)
router.post('/changeReviewStatus',ReviewController.changeReviewStatus)
// review routes in admin panel ends 

// booking routes in admin panel starts 
router.post('/viewAllBooking',BookingController.viewAllBooking)
router.post('/viewBookingById',BookingController.viewBookingById)
router.post('/changeBookingStatus',BookingController.changeBookingStatus)
// booking routes inadmin panel ends 


// product routes starts 
// router.post('/addProduct',ProductController.addProduct)
// product routes endes 

// add cart starts 
// router.post('/addCart',AddCartController.addCart)
module.exports = router