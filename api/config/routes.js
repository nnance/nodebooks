module.exports = function(app){

	//result route
	var User = require('../app/controllers/user');
	app.get('/rest/users', User.getList);
	app.get('/rest/users/:id', User.getById);
	app.post('/rest/users', User.addUser);
	app.put('/rest/users/:id', User.updateUser);
	app.delete('/rest/users/:id', User.deleteUser);
	//signin route
	app.post('/rest/signin', User.validateSignIn);
	app.post('/rest/users/requestpassword', User.requestPassword);
};
