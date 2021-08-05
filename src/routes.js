const {Router} = require('express');
const routes = Router();

const UserController = require('./controllers/UserController');
const SigninController = require('./controllers/SigninController');

routes.post('/users', UserController.createUser);
routes.get('/users', UserController.listUser);

routes.get('/users/:user_id', UserController.idUser);

routes.post('/signin', SigninController.create);

routes.post('/products/:user_id');
routes.get('/products/:user_id');
routes.patch('/products/:user_id/:products_id');
routes.delete('/products/:user_id/:products_id');

routes.get('/products/:products_id');
routes.get('/products');

routes.post('/cart/:user_id');
routes.get('/cart/:user_id');

routes.get('/cart/:user_id/:cart_id');

routes.get('/ping', (req, res) => {
  return res.json({Pong: true});
})

module.exports = routes;