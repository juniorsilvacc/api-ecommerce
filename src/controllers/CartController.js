const Cart = require('../models/Cart');
const User = require('../models/User');

module.exports = {
  async createCart (req, res){

    const bodyData = req.body;
    const {user_id} = req.params;

    try {

      const userExists = await User.findById(user_id);
      if(!userExists){
        return res.status(400).json({message: 'User not exists.'});
      }

      const createdCart = await Cart.create({
        ...bodyData,
        user: user_id
      });

      return res.status(200).json({message: 'Cart created successfully', createdCart});
      
    } catch (error) {
      return res.status(400).json({message: 'It is not possible to register this cart.'});
    }

  },
  async getCartUserById (req, res){

    const {user_id} = req.params;

    try {

      const userExists = await User.findById(user_id);
      if(!userExists){
        return res.status(400).json({message: 'User does not exist.'});
      }

      const cartExists = await Cart.find({user: user_id});
      
      const listedCart = cartExists;

      return res.status(200).json({message: 'Cart listed successfully.', listedCart});
      
    } catch (error) {
      return res.status(400).json({message: 'It is not possible to listed this cart.'});
    }

  },
  async getCartById (req, res){

    const {cart_id} = req.params;

    try {

      const cartExists = await Cart.findById(cart_id);
      if(!cartExists){
        return res.status(400).json({message: 'Cart does not exist.'});
      }

      const cartById = cartExists;

      return res.status(200).json({message: 'Cart listed successfully.', cartById});
      
    } catch (error) {
      return res.status(400).json({message: 'It is not possible to listed this cart.'});
    }
  },
}