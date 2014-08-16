module.exports = function(app) {
	var Nerd = require('../repository/nerdRepository');

	app.post('/api/nerds', function(req, res){
		Nerd.Save(req.body, function(err){
			if (!err) {
				res.send(200); //gravou corretamente
			} else {
				res.send(err); //ocorreu algum erro
			};
		});
	});

	app.get('/api/nerds', function(req, res) {
		Nerd.FindAll(function(err, nerds){
			res.json(nerds); //retorna todos os nerds
		});
	});

	// Pesquisa de nerds
    app.get('/api/nerds/:nome-:sobrenome', function(req, res){
    	Nerd.Find(req.params.nome, req.params.sobrenome, function(err, nerds){
    		if (!err) {
    			res.json(nerds);
    		} else {
    			res.send(err);
    		};    		
    	});
    });

	app.delete('/api/nerds/:id', function(req, res){
		Nerd.RemoveById(req.params.id, function(err, docs){
			if (!err) {
				res.send(200);
			} else {
				res.send(err);
			};
		});
	});
};