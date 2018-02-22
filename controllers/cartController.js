var Product = require('../models/product');
var Cart = require('../models/cart');

exports.addtocart = function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart.items : {});
    
    Product.findById(productId, function (err, product) {
        cart.add(product, product.id);
        req.session.cart = cart;
        res.redirect('/');
    });  
}

exports.shoppingcart = function(req, res, next){
    if (!req.session.cart) {
        return res.render('frontend/shop/shopping-cart', {products: null});
    }
    var cart = new Cart(req.session.cart.items);
    res.render('frontend/shop/shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
}

exports.reduce = function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.reduceByOne(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
};

exports.remove = function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
};