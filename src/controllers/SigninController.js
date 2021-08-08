const User = require('../models/User');

module.exports = {
  async signin (req, res){

    const {email, password} = req.body;

    try {

      const validEmail = await User.findOne({email});
      if(!validEmail) {
        return res.status(400).json({message: 'E-mail not exists.'});
      }

      const validPassword = await User.findOne({
        password
      }).where({
        email
      });

      const logged = validPassword;
      if(!logged){
        return res.status(400).json({message: 'E-mail or password incorrect.'});
      }

      return res.status(200).json({message: 'Success', logged});
      
    } catch (error) {
      return res.status(400).json({message: 'It not wes possible make the session.'})
    }

  }
}