var express = require('express');
var router = express.Router();
// Require Controllers Module
var cart_controller = require('../controllers/cartController');

/* GET home page. */
router.get('/add-to-cart/:id', cart_controller.addtocart);

router.get('/shopping-cart',cart_controller.shoppingcart);

module.exports = router;