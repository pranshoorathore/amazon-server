const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    category: String,
    image: String
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;