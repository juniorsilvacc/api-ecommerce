const {Router} = require('express');
const routes = Router();

const UserController = require('./controllers/UserController');
const SigninController = require('./controllers/SigninController');
const ProductController = require('./controllers/ProductsController');

routes.post('/users', UserController.createUser);
routes.get('/users', UserController.getUser);

routes.get('/users/:user_id', UserController.byIdUser);

routes.post('/signin', SigninController.create);

routes.post('/products/:user_id', ProductController.createProduct);
routes.get('/products/:user_id', ProductController.getAllProduct);
routes.patch('/products/:products_id', ProductController.updateProduct);
routes.delete('/products/:products_id', ProductController.deleteProduct);

routes.get('/products/:products_id');
routes.get('/products');

routes.post('/cart/:user_id');
routes.get('/cart/:user_id');

routes.get('/cart/:user_id/:cart_id');

routes.get('/ping', (req, res) => {
  return res.json({Pong: true});
})

module.exports = routes;