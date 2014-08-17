module.exports = function(app) {
	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	// sample api route

	var isLoged = false;

	app.get('*', function(req, res){
		if (isLoged) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
		} else if (req.body.user == 'user' &&
			       req.body.password == "123") {
			isLoged = true;
		} else {
			res.sendfile('./public/views/login.html');
		};
	});

	app.post('/api/login', function(req, res){
	    if (req.body.user == 'user' && req.body.password == "123") {
			isLoged = true;
            res.sendfile('./public/views/index.html'); // load our public/index.html file
		} else {
			res.sendfile('./public/views/login.html');
		};
	});
/*
	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html'); // load our public/index.html file
	});*/
};