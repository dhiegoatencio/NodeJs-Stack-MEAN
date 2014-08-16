module.exports = function(app) {
	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	// sample api route


	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html'); // load our public/index.html file
	});
};