module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// sample api route
	app.get('/api/nerds', function(req, res) {

		res.json([{"nome": "Dhiego" , "sobrenome":"Hendrix"}, 
		          {"nome": "Nei"    , "sobrenome": "Dias"  },
		          {"nome": "Bruna"  , "sobrenome": "Cunha" },
		          {"nome": "Thales"  , "sobrenome": "Adler" },
		          {"nome": "Carlove" , "sobrenome": "Cheio de amor"},
		          {"nome": "Flayner" , "sobrenome": "Velhinho"},
		          {"nome": "Nhé"     , "sobrenome": "Polar"  }]);
	});

	// route to handle creating (app.post)
	// route to handle delete (app.delete)

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html'); // load our public/index.html file
	});

};