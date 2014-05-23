// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
	teamid: String,
	username: String,
	firstname: String,
	lastname: String,
	address: String,
	address2: String,
	phone: String,
	altphone: String,
	birthdate: Date,
	email: String,
	paid: Boolean,
	createdate: { type: Date, default: Date.now },
  	photo: String,
  	password: String,
  	passwordHash: String,
  	admin: { type: Boolean, default: false },
  	treasure: { type: Boolean, default: false }
});

mongoose.model('User', UserSchema);
