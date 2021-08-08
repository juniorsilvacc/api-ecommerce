const {Router} = require('express');
const routes = Router();

const UserController = require('./controllers/UserController');
const SigninController = require('./controllers/SigninController');
const ProductController = require('./controllers/ProductsController');
const CartController = require('./controllers/CartController');

const {private} = require('./middlewares/Auth');

routes.post('/user', UserController.createUser);
routes.get('/user', UserController.getUser);
routes.get('/user/:user_id', UserController.getUserById);

routes.post('/user/signin', SigninController.signin);

routes.post('/products/:user_id', private, ProductController.createProduct);
routes.get('/products/:user_id', ProductController.getAllUserProduct);
routes.patch('/products/:products_id', private, ProductController.updateProduct);
routes.delete('/products/:products_id', private, ProductController.deleteProduct); 

routes.get('/products/id/:products_id', ProductController.getProductById);
routes.get('/products', ProductController. getAllProduct);

routes.post('/cart/:user_id', private, CartController.createCart);
routes.get('/cart/:user_id', private, CartController.getCartUserById);
routes.get('/cart/:user_id/:cart_id', private, CartController.getCartById);

routes.get('/ping', (req, res) => {
  return res.json({Pong: true});
})

module.exports = routes;