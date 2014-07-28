// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Transaction = new Schema({
    details: String,
    postDate: String,
    description: String,
    amount: Number,
    type: String,
    balance: Number,
    docId: String,
    notes: String,
    account: String
});

mongoose.model('transaction', Transaction);
