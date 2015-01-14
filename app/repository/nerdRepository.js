var mongoose = require('mongoose');
var model = mongoose.model('nerds');
var undef = "undefined";

var Find = function(pNome, pSobrenome, callback) {

	if (pNome !== undef && pSobrenome !== undef) {
		model.find({nome: pNome, sobrenome: pSobrenome}, callback);
	} else if (pNome !== undef) {
		
		model.find({nome: new RegExp('^'+pNome+'$', "i")}, callback);
		//model.find({nome: pNome}, callback);
	} else if (pSobrenome !== undef) {
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