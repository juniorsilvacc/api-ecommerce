const User = require('../models/User');

module.exports = {
  async createUser(req, res) {

    const {email, password} = req.body;

    try {

      const userExists = await User.findOne({email});
      if (userExists){
        return res.status(400).json({message: 'User already exists.'});
      }
      
      const create = await User.create({
        email,
        password
      });
  
      return res.status(200).json({message: 'User created successfully.', create});

    } catch (error) {
      return res.status(400).json({message: 'It was not possible to create.', error});
    }

  },

  async getUser(req, res) {

    try {

      const allUser = await User.find();
      return res.status(200).json({message: 'All listed user.', allUser});

    } catch (error) {
      return res.status(400).json({message: 'It was not possible to listed.', error});
    }

  },

  async byIdUser(req, res) {

    const {user_id} = req.params;

    try {

      const userId = await User.findById(user_id)
      if(!userId){
        return res.status(400).json({message: 'User does not exist.'});
      }

      return res.status(200).json({message: 'User found.', userId})
      
    } catch (error) {
      return res.status(400).json({message: "User not found.", error});
    }

  }
}