// server.js

const path = require('path');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// used to create, sign, and verify tokens
const jwt = require('jsonwebtoken');
// get our mongoose model
const User   = require('../src/models/user');

let api = require('./api');
let router = require('./router');

// Configure env file
require('dotenv').config();
const app = express();

var port = process.env.PORT || 3001; // used to create, sign, and verify tokens

// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Establish MongoDB connection - DB
// -----------------[------------------------------------------------------------

/*  This was local Mongo db ->
const address = 'mongodb://localhost:27017/Jaunt';
mongoose.connect(address);                          */

/* Using remote Mongo Atlas */
mongoose.connect('mongodb://user_1:blah@cluster0-shard-00-00-jvwrg.mongodb.net:27017,' +
                  'cluster0-shard-00-01-jvwrg.mongodb.net:27017,cluster0-shard-00-02-jvwrg.' +
                  'mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource' +
                  '=admin&retryWrites=true');

mongoose.Promise = global.Promise;

// Configure session variables
// -----------------------------------------------------------------------------
app.use(session({
  secret: 'app secret',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: true}
}));

// Error handling
//  -----------------------------------------------------------------------------
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
});

// configure the API to use bodyParser and look for JSON data in the request body
app.use('/api', api);
app.use('/', router);

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// =======================
// routes ================
// =======================
// basic route
app.get('/', function(req, res) {
  res.send('Hello! The API is at http://localhost:' + port + '/api');
});

app.get('/setup', function(req, res) {

  // create a sample user
  const vincent = new User({
    permission: '1',
    username: 'Vince',
    email: 'vzwu@ucsd.edu',
  });

  // save the sample user
  vincent.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true });
  });
});
// =======================
// start the server ======
// =======================
app.listen(port, () => console.log("Listening on port 3001"));
module.exports = {app};

/* EOF */