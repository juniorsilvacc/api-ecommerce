const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  user:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true
  },
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productQuantity: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
  },
});

module.exports = mongoose.model('Product', ProductSchema);