<<<<<<< HEAD
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
=======
// server.js

const path = require('path');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

let api = require('./api');
let router = require('./router');

// Configure env file
require('dotenv').config();
const app = express();

// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure session variables
// -----------------------------------------------------------------------------
app.use(session({
  secret: 'app secret',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: true}
}));

//
// TODO: Error handling
// -----------------------------------------------------------------------------

// configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', api);
app.use('/', router);

app.listen(3001, () => console.log("Listening on port 3001"));

module.exports = {app};
>>>>>>> master
