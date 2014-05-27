module.exports = function(app){

	//user route
	var User = require('../app/controllers/user');
	app.get('/api/users', User.getList);
	app.get('/api/users/:id', User.getById);
	app.post('/api/users', User.addUser);
	app.put('/api/users/:id', User.updateUser);
	app.delete('/api/users/:id', User.deleteUser);
	//signin route
	app.post('/api/signin', User.validateSignIn);
	app.post('/api/users/requestpassword', User.requestPassword);
	//account route
	var Account = require('../app/controllers/account');
	app.get('/api/accounts', Account.getList);
	app.get('/api/accounts/:id', Account.getById);
	app.post('/api/accounts', Account.addAccount);
	app.put('/api/accounts/:id', Account.updateAccount);
	app.delete('/api/accounts/:id', Account.deleteAccount);
};
