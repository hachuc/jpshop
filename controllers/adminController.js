var Member = require('../models/member');
var Product = require('../models/product');

exports.index = function(req, res, next) {
    res.render('backend/home/index', {
        title: req.__('Classifield Website'),
        pageTitle : req.__('Home page'),
        products : productChunks
    });  
}