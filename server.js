// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var fs 	           = require('fs');

// carrega todos os modulelos em models
fs.readdirSync(__dirname + '/app/models').forEach(function(filename){
	if (~filename.indexOf('.js')) require(__dirname + '/app/models/' + filename);
});

// configuration ===========================================
  
// config files
var db = require('./config/db');
var port = process.env.PORT || 8080; // set our port

mongoose.connect(db.url, {server:{auto_reconnect:true}}); // conecta ao mongodb

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users



// Configuring Passport =======================
var passport = require('passport');
var expressSession = require('express-session');
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user._id);
});
 
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// Initialize Passport
var initPassport = require('./app/passport/init');
initPassport(passport);


// routes ==================================================
fs.readdirSync(__dirname + '/app/routes').forEach(function(filename){
	if (~filename.indexOf('.js')) require(__dirname + '/app/routes/' + filename)(app);
});

// start app ===============================================
app.listen(port);                   // startup our app at http://localhost:8080
console.log('Magic happens on port ' + port);       // shoutout to the user
exports = module.exports = app;             // expose app