const UserController = require('./controllers/UserController');

module.exports = [
  {
    endPoint: '/users',
    method: 'GET',
    handler: UserController.listUsers,
  },
  {
    endPoint: '/users',
    method: 'POST',
    handler: UserController.createUser,
  },
  {
    endPoint: '/users/:id',
    method: 'GET',
    handler: UserController.getUser,
  },
  {
    endPoint: '/users/:id',
    method: 'PUT',
    handler: UserController.updateUser,
  },
  {
    endPoint: '/users/:id',
    method: 'DELETE',
    handler: UserController.deleteUser,
  },
];
