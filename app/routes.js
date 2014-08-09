module.exports = function(app, mongoose) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// sample api route

	app.post('/api/nerds', function(req, res){
		var Nerd = mongoose.model('nerds');
		var nerd = new Nerd(req.body);
		console.log("Salvando nerd");

		nerd.save(function(err){
			console.log(req.body);
		});		
	});


	app.get('/api/nerds', function(req, res) {
		mongoose.model('nerds').find(function(err, nerds){
			res.json(nerds);
		});
        /*res.json([{"nome": "Dhiego" , "sobrenome":"Hendrix"}, 
		          {"nome": "Nhé"     , "sobrenome": "Polar"  }]);*/
	});

	// route to handle creating (app.post)
	// route to handle delete (app.delete)

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html'); // load our public/index.html file
	});

};