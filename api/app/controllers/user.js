var mongoose = require('mongoose'),
	User = mongoose.model('User'),
	_ = require('underscore'),
	passwordHash = require('password-hash'),
	mandrill = require('mandrill-api'),
	mandrill_client = new mandrill.Mandrill('Q1mfCekulLqLCVsXC_xhJw'),
	excludeList = '-password -passwordHash';

exports.getList = function(req, res){
	console.log('controller/user getList: ' + (req.query && req.query.email ? req.query.email : ''));

	if (req.query && req.query.email) {
		req.query.email = new RegExp(req.query.email, 'i');
	}

	User.find(req.query, excludeList, function(err, users){
		if(err) throw new Error(err);
		res.send(users);
	});
};

exports.getById = function(req, res){
	console.log('controller/user getById: ' + req.params);

	User.findById(req.params.id, excludeList, function(err, user){
		if(err) throw new Error(err);
		res.send(user);
	});
};

exports.requestPassword = function(req, res){
	console.log('controller/user requestPassword: ' + req.body.email);

	var options = {};
	if (req.body.email) {
		options.email = new RegExp(req.body.email, 'i')
	}

	User.findOne(options, function (err, user) {
		if (err) throw new Error(err);
		if (!user) res.status(404).send('Not found');

	    var body = "Pleae return to the site and log in using the following information.\r\n" +
	                "\r\n" +
	                "User Name: " + user.email + "\r\n" +
	                "Password: " + user.password + "\r\n" +
	                "\r\n" +
	                "Make sure you type the password exactly.  It is best to copy and paste the password into " +
	                "the password field when you log in.  Once logged in you can change your password by going " +
	                "to the Membership page.\r\n";

		var message = {
			"text": body,
			"subject": "WMGA Password Request",
			"from_email": "donotreply@westwoodmensgolf.org",
			"from_name": "WMGA",
			"to": [{
					"email": user.email,
					"name": user.firstname + ' ' + user.lastname,
					"type": "to"
				}],
			"headers": {
				"Reply-To": "donotreply@westwoodmensgolf.org"
			},
			"important": false,
			"tags": [
				"password-resets"
			]
		};

		var async = false;
		var ip_pool = "Main Pool";
		mandrill_client.messages.send({"message": message, "async": async, "ip_pool": ip_pool}, function(result) {
			console.log(result);
			res.send(result);
		}, function(e) {
			// Mandrill returns the error as an object with name and message keys
			console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
			// A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
			res.status(500).send(e.name + ' - ' + e.message);
		});
	});
};

exports.validateSignIn = function(req, res){
	console.log('controller/user validateSignIn: ' + req.body.email);

	var options = {};

	if (req.body.email) {
		options.email = new RegExp(req.body.email, 'i');
	}

	if (passwordHash.isHashed(req.body.password)) {
		options.passwordHash = req.body.password;
	} else {
		options.password = req.body.password;
	}

	User.findOne(options, function (err, user) {
		if (err) throw new Error(err);
		if (!user) res.status(404).send('Not found');
		res.send(user);
	});
};

exports.addUser = function(req, res){
	console.log('controller/user postMessage: ' + req.body);

	var user = new User(req.body);
	if (user.password) {
		user.passwordHash = passwordHash.generate(user.password);
	}
	user.save(function() {
		res.send(user);
	});
};

exports.updateUser = function(req, res){
	console.log('controller/user putMessage: ' + req.body);

	var updateObj = _.omit(req.body, ['_id', '__v']);

	User.findById(req.params.id,function(err, user){
		if(err) throw new Error(err);

		if (updateObj.password) {
			updateObj.passwordHash = passwordHash.generate(updateObj.password);
		}
		user.update(updateObj,function(err,count){
			if(err) throw new Error(err);
			res.send(req.body);
		});
	});
};

exports.deleteUser = function(req, res){
	console.log('controller/user deleteMessage: ' + req.body);

	User.findById(req.params.id,function(err, user){
		if(err) throw new Error(err);
		user.remove(function(err,count){
			if(err) throw new Error(err);
			res.send(req.body);
		});
	});
};
