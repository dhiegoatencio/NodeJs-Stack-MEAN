var mongoose = require('mongoose');
var model = mongoose.model('produtos');
var undef = "undefined";

var Find = function(pNome, pDescricao, callback) {

	if (pNome !== undef && pDescricao !== undef) {
		model.find({nome: pNome, descricao: pDescricao}, callback);
	} else if (pNome !== undef) {
		model.find({nome: pNome}, callback);
	} else if (pDescricao !== undef) {
		model.find({descricao: pDescricao}, callback);
	} else {
		model.find(callback);
	};
};

var FindAll = function(callback) {
	model.find(callback);
};

var RemoveById = function(pId, callback) {
	model.remove({_id: pId}, callback);
};

var Save = function(pProduto, callback) {
	var produto = new model(pProduto);
	produto.save(callback);
};

module.exports.Find = Find;
module.exports.Save = Save;
module.exports.FindAll = FindAll;
module.exports.RemoveById = RemoveById;