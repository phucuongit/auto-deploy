const express = require('express');
const route = express.Router();
// const productController = require('../controller/productController');
const adminController = require('../controller/adminController');

route.get('/add-product', adminController.addProduct);
route.post('/add-product', adminController.addProductPost);

route.get('/products', adminController.getProductsAdmin);
route.get('/edit-product/:productId', adminController.getEditProducts);
route.post('/edit-product', adminController.postEditProduct);

module.exports = route;