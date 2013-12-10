'use strict';

// Module dependencies.
var express = require('express'),
    path = require('path');

var app = express();
var nodemailer = require("nodemailer");
var mailer = require("./lib/modules/mailer");

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
  app.use(express.static(__dirname + '/public'));
});

// Routes
app.get('/api/awesomeThings', api.awesomeThings);

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
  res.send('<!DOCTYPE html> ' +
           '<html lang="en">' +
           '<head>' +
              '<title>deeplink me kerel :P</title>' +
            '</head>' +
            '<body>' +
              '<a href="http://sparq.it/1lm">ebay</a>' +
              '<br />' +
              '<a href="http://sparq.it/1xq">etsy</a>' +
              '<br />' +
              '<a href="http://sparq.it/392">tumblr</a>' +
            '</body>' +
            '</html>');
});

app.get('/zalando', function(req, res) {
  res.send('<!DOCTYPE html> ' +
           '<html lang="en">' +
           '<head>' +
              '<title>zalando deeplinks</title>' +
            '</head>' +
            '<body>' +
              '<h3>Category: <a href="zalando://ROOT/herren">Zalando herren</a></h3>' +
              '<br />' +
              '<h3>Product List: <a href="zalando://PRODLIST?query=Nike&filterColor=grau&order=popularity">Zalando Nike</a></h3>' +
              '<br />' +
              '<h3>Product: <a href="zalando://PDS?sku=c7712a00u-909">Calver ' +
                'LIVINGSTONE - Business-Schnürer - nero anticato</a></h3>' +
            '</body>' +
            '</html>');
});

app.get('/getyourguide', function(req, res) {
  res.send('<!DOCTYPE html> ' +
           '<html lang="en">' +
           '<head>' +
              '<title>Get Your Guide deeplinks</title>' +
            '</head>' +
            '<body>' +
              '<h3><a href="http://sparq.it/44w/">sparq.it -- Dubai: Burj Khalifa Skyscraper Entrance Ticket</a></h3>' +
              '<br />' +
              '<h3><a href="http://deeplink.me/getyourguide.com/dubai-l173/dubai-skyscraper-burj-khalifa-entrance-ticket-t25873/">deeplink.mde -- Dubai: Burj Khalifa Skyscraper Entrance Ticket</a></h3>' +
            '</body>' +
            '</html>');
});

// Start server
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Express server listening on port %d in %s mode', port, app.get('env'));
});
