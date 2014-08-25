module.exports = function(app, passport, isAuthenticated) {
	var Nerd = require('../repository/nerdRepository');

	app.post('/api/nerds', isAuthenticated, function(req, res){
		Nerd.Save(req.body, function(err, doc){
			if (!err) {
				//res.redirect('www.google.com');
				res.send(String(doc._id)); //se gravou corretamente, retorna o id como string
			} else {
				res.send(500, err); //ocorreu algum erro
			};
		});
	});

	app.get('/api/nerds', isAuthenticated, function(req, res) {
		Nerd.FindAll(function(err, nerds){
			res.json(nerds); //retorna todos os nerds
		});
	});

	// Pesquisa de nerds
    app.get('/api/nerds/:nome-:sobrenome', isAuthenticated, function(req, res){
    	Nerd.Find(req.params.nome, req.params.sobrenome, function(err, nerds){
    		if (!err) {
    			res.json(nerds);
    		} else {
    			res.send(500, err);
    		};    		
    	});
    });

	app.delete('/api/nerds/:id', isAuthenticated, function(req, res){
		Nerd.RemoveById(req.params.id, function(err, doc){
			if (!err) {
				res.json(doc);
			} else {
				res.send(500, err);
			};
		});
	});
};