const express = require('express');
const { getAllProducts, getProductById, addNewProduct } = require('../controller/productControllers');
const router = express.Router();

//@desc  GET all products from db
//@route GET /api/products
//@access Public
router.get('/', getAllProducts)

//@desc  GET a products from db
//@route GET /api/products/:id
//@access Public
router.get('/:id', getProductById)

//@desc POST a new product to db
//@route POST /api/products/addnew
//@access Public
router.post('/addnew', addNewProduct)

module.exports = router;