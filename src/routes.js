const {Router} = require('express');
const routes = Router();

const UserController = require('./controllers/UserController');

routes.post('/users', UserController.createUser);
routes.get('/users', UserController.ListUser);

routes.get('/users/:user_id', UserController.IdUser);

routes.post('/signin');

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