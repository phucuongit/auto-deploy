const express = require('express');
const route = express.Router();
const productController = require('../controller/productController');

route.get('/', productController.getProducts);
route.get('/products/:productId', productController.getProductByID);
module.exports = route;