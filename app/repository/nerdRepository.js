var Find = function(mongoose, pNome, sobrenome, callback) {

	console.log(pNome + "  - " + sobrenome);

	if (!!pNome) {
		console.log('entrou ');
		mongoose.model('nerds').find({nome: pNome}, callback);
	} else {
		console.log('else ');
		//mongoose.model('nerds').find({},callback);
	};

};

module.exports.Find = Find;