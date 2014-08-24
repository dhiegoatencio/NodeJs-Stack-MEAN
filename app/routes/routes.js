module.exports = function(app, passport, isAuthenticated) {

	app.get('/failure', function(req, res){
		var msg = req.flash('message')[0]; // captura as mensagens de erro da sessão. Muitas delas vindas de login.js e signup.js
		res.send(msg);
	});

	app.post('/api/login', passport.authenticate('login', {
		successRedirect: '/home',
		failureRedirect: '/failure',
		failureFlash: true
	}));

	app.post('/api/signup', passport.authenticate('signup', {
		successRedirect: '/home',
		failureRedirect: '/failure',
		failureFlash: true
	}));


	// Desloga o usuário, como o app usa angular. Deve ser usado como no exemplo>
	// <a href="/api/signout" target="_self">Sair</a>
	// Target como _self, senão o angular vai assumir a rota e não funciona o redirect aqui do server
	app.get('/api/signout', function(req, res) {
		req.logout();
		res.redirect('/');
	});	


	app.get('/', function(req, res){
    	res.sendfile('./public/views/acesso/login.html');
	});

	app.get('/registrar', function(req, res){
		res.sendfile('./public/views/acesso/register.html');
	});

	// route to handle all angular requests
	app.get('/home', isAuthenticated, function(req, res){
		res.sendfile('./public/views/index.html', {user: req.user}); //se está autenticado vai para a página inicial da aplicação
	});
};