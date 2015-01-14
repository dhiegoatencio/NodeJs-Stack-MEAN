var mongoose = require('mongoose');

var produtoSchema = new mongoose.Schema({
	nome: String,
	descricao: String,
	valor: Number
});

mongoose.model('produtos', produtoSchema);