var mongoose = require('mongoose');

var nerdsSchema = new mongoose.Schema({
	nome: String,
	sobrenome: String
});

mongoose.model('nerds', nerdsSchema);