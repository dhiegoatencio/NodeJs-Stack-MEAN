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

	app.delete('/api/nerds/:id', function(req, res){
		var Nerd = mongoose.model('nerds');

		Nerd.remove({_id: req.params.id}, function(err, docs){
			if (!err) {
				res.send(200);
			} else {
				res.json(err);
			};
		});
	});


	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html'); // load our public/index.html file
	});
};