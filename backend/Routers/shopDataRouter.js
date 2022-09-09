const express = require('express')

const shopDataController = require('../Controllers/shopDataController')
const authContoller = require('../Controllers/authController')

const router = express.Router()



router
   .route('/')
   .get(shopDataController.getAllShopDatas)
   .post(shopDataController.createShopData)



module.exports = router