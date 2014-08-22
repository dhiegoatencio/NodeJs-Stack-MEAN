module.exports = function(app, passport, isAuthenticated) {
	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	// sample api route

	var isLoged = false;

/*
	app.get('*', function(req, res){
		if (isAuthenticated) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
		} else if (req.body.user == 'user' &&
			       req.body.password == "123") {
			isLoged = true;
		} else {
			res.sendfile('./public/views/login.html');
		};
	});*/

	app.get('/', isAuthenticated, function(req, res){
		res.sendfile('./public/views/index.html');
	});

/*
	app.get('/', function(req, res) {
    	// Display the Login page with any flash message, if any
		res.sendfile('./public/views/login.html');
	});*/

	app.post('/api/login', passport.authenticate('login', {
		successRedirect: '/'
	}));

	app.post('/api/signup', passport.authenticate('signup', {
		successRedirect: '/',
		failureRedirect: '/signup'
	}));

	app.get('/signup', function(req, res){
		res.sendfile('./public/views/register.html');
	});


/*
	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html'); // load our public/index.html file
	});*/
};