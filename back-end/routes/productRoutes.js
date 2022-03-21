const express = require('express');
const { getAllProducts, getProductById } = require('../controller/productControllers');
const router = express.Router();

//@desc  GET all products from db
//@route GET /api/products
//@access Public
router.get('/', getAllProducts)

//@desc  GET a products from db
//@route GET /api/products/:id
//@access Public
router.get('/:id', getProductById)

module.exports = router;