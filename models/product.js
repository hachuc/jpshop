var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var product = new Schema({
    imagePath : {type: String, require: true},
    title : {type: String, require: true},
    descriptions : {type: String, require: true},
    price : {type: Number, require: true},
});

module.exports = mongoose.model('Product', product);