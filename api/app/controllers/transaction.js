var mongoose = require('mongoose'),
	Transaction = mongoose.model('transaction'),
	_ = require('underscore');

exports.getList = function(req, res){
	console.log('controller/transaction getList: ' + (req.query && req.query.name ? req.query.name : ''));

	if (req.query && req.query.name) {
		req.query.nam = new RegExp(req.query.name, 'i');
	}

	Transaction.find(req.query, function(err, accounts){
		if(err) throw new Error(err);
		res.send(accounts);
	});
};

exports.getById = function(req, res){
	console.log('controller/transaction getById: ' + req.params);

	Transaction.findById(req.params.id, function(err, transaction){
		if(err) throw new Error(err);
		res.send(transaction);
	});
};

exports.addTransaction = function(req, res){
	console.log('controller/transaction postMessage: ' + req.body);

	var transaction = new Transaction(req.body);
	transaction.save(function() {
		res.send(transaction);
	});
};

exports.updateTransaction = function(req, res){
	console.log('controller/transaction putMessage: ' + req.body);

	var updateObj = _.omit(req.body, ['_id', '__v']);

	Transaction.findById(req.params.id,function(err, transaction){
		if(err) throw new Error(err);

		transaction.update(updateObj,function(err,count){
			if(err) throw new Error(err);
			res.send(req.body);
		});
	});
};

exports.deleteTransaction = function(req, res){
	console.log('controller/transaction deleteMessage: ' + req.body);

	Transaction.findById(req.params.id,function(err, transaction){
		if(err) throw new Error(err);
		transaction.remove(function(err,count){
			if(err) throw new Error(err);
			res.send(req.body);
		});
	});
};
