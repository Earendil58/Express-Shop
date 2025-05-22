const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');
const productControllers = require('../controllers/product-controller');


router.get('/add-product', productControllers.getAddProduct);

router.post('/add-product', productControllers.postAddProduct);


exports.routes = router; 