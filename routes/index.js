var express = require('express');
var router = express.Router();
// Require Controllers Module
var home_controller = require('../controllers/homeController');

var cart_controller = require('../controllers/cartController');

/* GET Language English */
router.get('/en', home_controller.lang_en);

/* GET Language Vietnamese */
router.get('/vi', home_controller.lang_vi);

/* GET home page. */
router.get('/', home_controller.index);

/* GET home page. */
router.get('/add-to-cart/:id', cart_controller.addtocart);

router.get('/shopping-cart',cart_controller.shoppingcart);

router.get('/reduce/:id', cart_controller.reduce);

router.get('/remove/:id', cart_controller.remove);

module.exports = router;