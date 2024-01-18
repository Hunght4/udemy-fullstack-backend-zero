const express = require('express')
const {getHomepage, hungNghiem, postCreateUser} = require('../controllers/homeController')
const router = express.Router();

router.get('/', getHomepage)

router.get('/hungNghiem', hungNghiem)

router.post('/create-user', postCreateUser);

module.exports = router;