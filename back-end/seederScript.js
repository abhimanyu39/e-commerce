require('dotenv').config();

const ProductData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/products');

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});

        await Product.insertMany(ProductData);

        console.log('Data import success');

        process.exit();
    } catch (error) {
        console.error('Error with data import');
        process.exit(1);
    }
}

importData();