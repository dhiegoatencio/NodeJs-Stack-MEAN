var mongoose = require('mongoose');
var model = mongoose.model('nerds');

var Find = function(pNome, pSobrenome, callback) {

	if (pNome !== "undefined" && pSobrenome !== "undefined") {
		model.find({nome: pNome, sobrenome: pSobrenome}, callback);
	} else if (pNome !== "undefined") {
		model.find({nome: pNome}, callback);
	} else if (pSobrenome !== "undefined") {
		model.find({sobrenome: pSobrenome}, callback);
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

var Save = function(pNerd, callback) {
	var nerd = new model(pNerd);
	nerd.save(callback);
};

module.exports.Find = Find;
module.exports.Save = Save;
module.exports.FindAll = FindAll;
module.exports.RemoveById = RemoveById;