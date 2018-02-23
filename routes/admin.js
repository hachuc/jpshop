var express = require('express');
var router = express.Router();

var admin_controller = require('../controllers/adminController');
var member_controller = require('../controllers/memberController');

router.get('/', member_controller.isLoggedIn, admin_controller.index);