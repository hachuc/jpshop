var mongoose = require('mongoose');
var database = require('../config/database');
var Product = require("../models/product");

var products = [
    new Product({
        imagePath: 'https://cnet2.cbsistatic.com/img/i6IAUld_96XzXoramZ4bkaMAG_s=/770x578/2014/10/16/c7a85405-d22d-4c3e-822c-806193f02478/apple-imac-retina-5k-display-7861-008.jpg',
        title: 'IMAC 2017',
        descriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
        price: 1000
    }),
    new Product({
        imagePath: 'https://cnet2.cbsistatic.com/img/i6IAUld_96XzXoramZ4bkaMAG_s=/770x578/2014/10/16/c7a85405-d22d-4c3e-822c-806193f02478/apple-imac-retina-5k-display-7861-008.jpg',
        title: 'IMAC 2017-1',
        descriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
        price: 1000
    }),
    new Product({
        imagePath: 'https://cnet2.cbsistatic.com/img/i6IAUld_96XzXoramZ4bkaMAG_s=/770x578/2014/10/16/c7a85405-d22d-4c3e-822c-806193f02478/apple-imac-retina-5k-display-7861-008.jpg',
        title: 'IMAC 2017-1',
        descriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
        price: 1000
    }),
    new Product({
        imagePath: 'https://cnet2.cbsistatic.com/img/i6IAUld_96XzXoramZ4bkaMAG_s=/770x578/2014/10/16/c7a85405-d22d-4c3e-822c-806193f02478/apple-imac-retina-5k-display-7861-008.jpg',
        title: 'IMAC 2017-1',
        descriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
        price: 1000
    }),
    new Product({
        imagePath: 'https://cnet2.cbsistatic.com/img/i6IAUld_96XzXoramZ4bkaMAG_s=/770x578/2014/10/16/c7a85405-d22d-4c3e-822c-806193f02478/apple-imac-retina-5k-display-7861-008.jpg',
        title: 'IMAC 2017-1',
        descriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
        price: 1000
    }),
    new Product({
        imagePath: 'https://cnet2.cbsistatic.com/img/i6IAUld_96XzXoramZ4bkaMAG_s=/770x578/2014/10/16/c7a85405-d22d-4c3e-822c-806193f02478/apple-imac-retina-5k-display-7861-008.jpg',
        title: 'IMAC 2017-1',
        descriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
        price: 1000
    }),
    new Product({
        imagePath: 'https://cnet2.cbsistatic.com/img/i6IAUld_96XzXoramZ4bkaMAG_s=/770x578/2014/10/16/c7a85405-d22d-4c3e-822c-806193f02478/apple-imac-retina-5k-display-7861-008.jpg',
        title: 'IMAC 2017-1',
        descriptions: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
        price: 1000
    })
];

mongoose.connect(database.dbStr);
var done = 0;
for(var i = 0 ; i< products.length; i++){
    products[i].save(function(err, result){
        if(done == products.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}