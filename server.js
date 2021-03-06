'use strict';

// Module dependencies.
var express = require('express'),
    path = require('path');

var app = express();
var nodemailer = require("nodemailer");
var mailer     = require("./lib/modules/mailer");
var deeplinks  = require("./lib/modules/deeplinks");

// Controllers
var api = require('./lib/controllers/api');

// Express Configuration
app.configure(function(){
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
});

app.configure('development', function(){
  app.use(express.static(path.join(__dirname, '.tmp')));
  app.use(express.static(path.join(__dirname, 'app')));
  app.use(express.errorHandler());
});

app.configure('production', function(){
  app.use(express.favicon(path.join(__dirname, 'public/favicon.ico')));
  app.use(express.static(path.join(__dirname, 'public')));
});

// Routes
app.post('/contact', function(req, res) {
  mailer.sendMail(
    nodemailer,
    req.body.message.name,
    req.body.message.address,
    req.body.message.content);

  setTimeout(function() {
    res.redirect("/");
  }, 3000);
});

app.get('/deeplinks', function(req, res) {
  res.send(deeplinks.sparqit());
});

// Start server
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Express server listening on port %d in %s mode', port, app.get('env'));
});
