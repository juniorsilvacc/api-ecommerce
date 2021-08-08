const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  products: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Product',
    required: true,
  }],
  user:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    }
  },
  payment:{
    card:{
      number: {
        type: String,
      },
      cvc:{
        type: String,
      }
    }
  },
});

module.exports = mongoose.model('Cart', CartSchema);