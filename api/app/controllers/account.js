var mongoose = require('mongoose'),
	Account = mongoose.model('Account'),
	_ = require('underscore');

exports.getList = function(req, res){
	console.log('controller/acccount getList: ' + (req.query && req.query.name ? req.query.name : ''));

	if (req.query && req.query.name) {
		req.query.nam = new RegExp(req.query.name, 'i');
	}

	Account.find(req.query, function(err, accounts){
		if(err) throw new Error(err);
		res.send(accounts);
	});
};

exports.getById = function(req, res){
	console.log('controller/acccount getById: ' + req.params);

	Account.findById(req.params.id, function(err, acccount){
		if(err) throw new Error(err);
		res.send(acccount);
	});
};

exports.addAccount = function(req, res){
	console.log('controller/acccount postMessage: ' + req.body);

	var acccount = new Account(req.body);
	acccount.save(function() {
		res.send(acccount);
	});
};

exports.updateAccount = function(req, res){
	console.log('controller/acccount putMessage: ' + req.body);

	var updateObj = _.omit(req.body, ['_id', '__v']);

	Account.findById(req.params.id,function(err, acccount){
		if(err) throw new Error(err);

		acccount.update(updateObj,function(err,count){
			if(err) throw new Error(err);
			res.send(req.body);
		});
	});
};

exports.deleteAccount = function(req, res){
	console.log('controller/acccount deleteMessage: ' + req.body);

	Account.findById(req.params.id,function(err, acccount){
		if(err) throw new Error(err);
		acccount.remove(function(err,count){
			if(err) throw new Error(err);
			res.send(req.body);
		});
	});
};
