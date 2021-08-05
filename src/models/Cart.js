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
    required: true
  },
  adress: {
    street: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
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