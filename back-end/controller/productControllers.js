const res = require('express/lib/response');
const Product = require('../models/products');

const getAllProducts = async(req, res) => {
    try {
        const products = await Product.find({})

        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
}

const getProductById = async(req, res) => {
    try {
        const product = await Product.find({ _id: req.params.id });

        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
}

const addNewProduct = async (req, res) => {
    console.log(req.body);
    try {
        await Product.create(req.body);

        res.status(200).json({ message: "Product Added" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    addNewProduct,
};