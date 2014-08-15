var mongoose = require('mongoose');

var Find = function(pNome, pSobrenome, callback) {

	console.log(pNome + "-" + pSobrenome);

	var model = mongoose.model('nerds');

	if (pNome !== "undefined") {
		model.find({nome: pNome}, callback);
	} else if (pSobrenome !== "undefined") {
		model.find({sobrenome: pSobrenome}, callback);
	} else if (pNome !== "undefined" && pSobrenome !== "undefined") {
		model.find({nome: pNome, sobrenome: pSobrenome}, callback);
	} else {
		model.find({}, callback);
	};

};


module.exports.mongoose = mongoose;
module.exports.Find = Find;