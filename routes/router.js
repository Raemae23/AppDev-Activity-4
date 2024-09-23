const express = require('express');
const router = express.Router();
const item = require('../controller/itemController.js');


router.get('/', item.home);          
router.get('/about', item.about);     
router.get('/contact', item.contact); 
router.get('/services', item.services); 
router.get('/portfolio', item.portfolio);

module.exports = router;