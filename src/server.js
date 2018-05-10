const express = require('express');        // call express
const app = express();                 // define our app using express
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const User = require('./models/user.js');
const Site = require('./models/site.js');
const Tour = require('./models/tour.js');
const url = 'mongodb://localhost:27017/Jaunt';

var port = process.env.PORT || 3001;        // set our port
var router = express.Router();              // get an instance of the express Router

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.json('you did it main');
});

app.get('/api/site', function(req, res) {
  // res.json(Site.stats());
});

app.post('/api/site', function(req, res) {
  // Site.create({
  //   name: "test",
  //   // message: req.body.MessageofGuest,
  // }).then(signature => {
  //   res.json(signature)
  // });
});

app.use('/api', router);

// START THE SERVER
app.listen(port);
console.log("Server started! Port:", port);
