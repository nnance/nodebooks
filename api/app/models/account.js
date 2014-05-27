// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var AccountSchema = new Schema({
	number: Number,
	name: String,
	description: String,
	type: String,
	createdate: { type: Date, default: Date.now }
});

mongoose.model('Account', AccountSchema);
