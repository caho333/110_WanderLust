// api

const express = require('express');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const jwt = require('jsonwebtoken');

const User = require('./models/user');
const Site = require('./models/site');
const Tour = require('./models/tour');

const api = express.Router();

let passport = require("passport");
const passportJWT = require("passport-jwt");

let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;

// Json Web Token Passport Configuration
// -----------------------------------------------------------------------------
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
jwtOptions.secretOrKey = 'tasmanianDevil';

let strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log('payload received', jwt_payload);
  // usually this would be a database call:
  let user = User.findById(jwt_payload.id, (err, user) => {
    if (user) {
      next(null, user);
    } else {
      next(null, false);
    }
  });
});

passport.use(strategy);

// Endpoints
// -----------------------------------------------------------------------------
api.get('/', (req, res) => {
  res.send({ express: 'Hello From Express API' });
});

/**
 * GET /authenticate
 * @param {String} username - user name
 * @param {String} password - user password
 * @return {String} token
 */
api.post('/auth', (req, res) => {

  if(!req.body.name || !req.body.password) {
    return res.status(500).json("No username or password provided.");
  }

  let name = req.body.name;
  let password = req.body.password;


  console.log("password = " + req.body.password);
  User.findOne({username: name}, (err, user) => {
    // if( !(password === user.password) )
    //   res.status(401).json({message: "passwords did not match."});

    let payload = {id: user.id};
    let token = jwt.sign(payload, jwtOptions.secretOrKey);
    return res.status(200).json({message: "enjoy your token", token: token});
  });

});

// POST /login
api.post('/login', (req, res) => {
  User.create(req.body).then(function (localUser) {
    res.send(localUser);
  });
});

// GET /user/:id
api.get('/user/:id', (req, res) => {
  User.findById(req.params.id, function (err, user) {
    if(err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");

    res.status(200).send(user);
  });

});


// POST /user
api.post('/user', (req, res) => {
  let hashedPassword = bcrypt.hashSync(req.body.password, 8);

  User.create({
    email: req.body.email,
    username: req.body.username,
    password: hashedPassword
  }, function (err, user) {
    if(err)
      return res.status(500).send("There was a problem inserting data to the database.");

    res.status(200).send(user);
  });
});


// DELETE /user/:id
api.delete('/user/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, function (err, user) {
    if(err)
      return res.status(500).send("There was a problem deleting the user.");

    res.status(200).send("User "+ user.username +" was deleted.");
  });

});

// PUT /user/:id
api.put('/user/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, user) {
    if(err)
      return res.status(500).send("There was a problem updating the user.");

    res.status(200).send(user);
  });
});

// GET /activities
api.get('/activities', (req, res) => {
  Site.find({type: 'Activity'}, function(err, activities) {
    if(err)
      return res.status(500).send("There was a problem fetching the activities.");

    res.status(200).send(activities);
  });
});

// POST /activity

// GET /landmarks
api.get('/landmarks', (req, res) => {
  Site.find({type: 'Landmark'}, function (err, landmarks) {
    if(err)
      return res.status(500).send("There was a problem fetching the landmarks.");

    res.status(200).send(landmarks);
  });
});

// GET /tours
api.get('/tours', (req, res) => {
  Tour.find({}, function (err, tours) {
    if(err)
      return res.status(500).send("There was a problem retrieving tours.");

    res.status(200).send(tours);
  });
});

// POST /tour


// GET /tours/:id
api.get('/tours/:id', (req, res) => {
  Tour.findById(req.params.id, function (err, tour) {
    if(err)
      return res.status(500).send("There was a problem finding the tour.");

    res.status(200).send(tour);
  });
});

// PATCH /tours/:id

// DELETE /tours/:id
// FIXME: Should only be deleted by user that created it.
api.delete('/tour/:id', (req, res) => {
  Tour.findByIdAndRemove(req.params.id, function(err, tour) {
    if(err)
      res.status(500).send("There was a problem deleting the user");

    res.status(500).send("Tour "+tour.title+" was deleted.")
  });
});

module.exports = api;
