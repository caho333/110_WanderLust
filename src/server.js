// server.js

const path = require('path');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

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

// Establish MongoDB connection - DB
// -----------------[------------------------------------------------------------
const address = 'mongodb://localhost:27017/Jaunt';
mongoose.connect(address);
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

app.listen(3001, () => console.log("Listening on port 3001"));
module.exports = {app};

/* EOF */