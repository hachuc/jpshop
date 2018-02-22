var Member = require('../models/member');
var Product = require('../models/product');

exports.lang_en = function(req, res, next) {
    res.cookie('language', 'en', { maxAge: 900000, httpOnly: true });
    res.redirect('back');
};

exports.lang_vi = function(req, res, next) {
    res.cookie('language', 'vi', { maxAge: 900000, httpOnly: true });
    res.redirect('back');
};

exports.index = function(req, res, next) {
    Product.find(function(err, docs){
        var productChunks = [];
        var chunkSize = 3;
        for(var i = 0; i< docs.length; i+= chunkSize){
            productChunks.push(docs.slice(i, i+chunkSize));
        }
        res.render('frontend/home/index', {
            title: req.__('Classifield Website'),
            pageTitle : req.__('Home page'),
            products : productChunks
        });
    });    
}