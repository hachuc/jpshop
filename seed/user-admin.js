var mongoose = require('mongoose');
var database = require('../config/database');
var Member = require('../models/member');

var userAdmin = new Member({
    info: {
        firstname: 'Hà',
        lastname: 'Chúc',
        phone: '0979944669',
        company: 'JP Shop',
        address: 'Ba Dinh - Ha Noi'},
    local: {
        email: 'hachuc@gmail.com',
        password: '',
        adminPin: '',
        activeToken: '',
        activeExpires: null,
        resetPasswordToken: '',
        resetPasswordExpires: null
    },
    roles:'ADMIN',
    status:'ACTIVE'
});