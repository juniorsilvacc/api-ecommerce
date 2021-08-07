const User = require('../models/User');
const Product = require('../models/Product');

module.exports = {
  async createProduct (req, res){

    const {productName, productDescription, productPrice, productQuantity, productImage} = req.body;
    const {user_id} = req.params;

    try {

      const user = await User.findById(user_id);
      if(!user){
        return res.status(400).json({message: 'User not exists.'});
      }

      const createdProdutc = await Product.create({
        productName, 
        productDescription, 
        productPrice, 
        productQuantity,
        productImage,
        user: user_id
      });

      return res.status(200).json({message: 'Product created successfully', createdProdutc});
      
    } catch (error) {
      return res.status(400).json({message: 'It is not possible to register this product.'});
    }

  },
  async getAllProduct (req, res){

    const {user_id} = req.params;

    try {

      const userId = await User.findById(user_id);
      if(!userId){
        return res.status(400).json({message: 'User not exists.'});
      }

      const getProducts = await Product.find({user: userId});
      if(getProducts < 1){
        return res.status(400).json({message: 'User not products.'});
      }

      return res.status(200).json({message: 'Products listed successfully.', getProducts});
      
    } catch (error) {
      return res.status(400).json({message: 'It is not possible to listed this product.'});
    }

  },
  async updateProduct (req, res){

    try {
      
    } catch (error) {
      return res.status(400).json({message: 'It is not possible to update this product.'});
    }

  },
  async deleteProduct (req, res){

  },
  
}