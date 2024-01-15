const express = require('express')
const {getHomepage, hungNghiem} = require('../controllers/homeController')
const router = express.Router();

router.get('/', getHomepage)

router.get('/hungNghiem', hungNghiem)

module.exports = router;