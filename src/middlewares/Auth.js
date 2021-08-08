module.exports = {
  private: async (req, res, next) => {

    const {token} = req.headers;
    const {user_id} = req.params;

    if(!token){
      return res.status(400).json({message: 'No token',});
    }

    if(token !== user_id){
      return res.status(400).json({message: 'Not allowed',});
    }

    next();
  }
}