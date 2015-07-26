'use strict';

var express = require('express');
var request = require('request-json');
var cors = require('cors');
var app = express();


app.use(express.static(__dirname + '/public'));

app.get('/', cors(), function(req, res, next) {
  res.status(404).send('could not find page');
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});