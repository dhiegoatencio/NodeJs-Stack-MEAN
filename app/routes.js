module.exports = function(app, mongoose) {
	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	// sample api route

	app.post('/api/nerds', function(req, res){
		var Nerd = mongoose.model('nerds');
		var nerd = new Nerd(req.body);

		nerd.save(function(err){
			if (!err) {
				res.send(200); //gravou corretamente
			} else {
				res.send(err); //ocorreu algum erro
			};
		});
	});

	app.get('/api/nerds', function(req, res) {
		mongoose.model('nerds').find(function(err, nerds){
			res.json(nerds); //retorna todos os nerds
		});
	});

	// Pesquisa de nerds
    app.get('/api/nerds/:pesq', function(req, res){
		var pesq = '{' +  req.params.pesq + '}';
    	console.log('teste pesq = ' + pesq);  	

    	mongoose.model('nerds').find(pesq, function(err, nerds){
    		if (!err) {
    			res.json(nerds);
    		} else {
    			res.send(err);
    		}
    	});
    });

	app.delete('/api/nerds/:id', function(req, res){
		var Nerd = mongoose.model('nerds');

		Nerd.remove({_id: req.params.id}, function(err, docs){
			if (!err) {
				res.send(200);
			} else {
				res.send(err);
			};
		});
	});


	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html'); // load our public/index.html file
	});
};