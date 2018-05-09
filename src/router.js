// router.js

const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

const router = express.Router();


// set up port
// const API_PORT = process.env.API_PORT || 3001;

router.get('/', (req, res) => {
  res.send({ express: 'Hello From Express API' });
});

// TODO: GET /authenticate
router.get('/authenticate', (req, res) => {

});


// GET /user/:id
router.get('/user/:id', (req, res) => {
  User.findById(req.params.id, function (err, user) {
    if(err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");

    res.status(200).send(user);
  });

});


// POST /user
router.get('/user', (req, res) => {
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
router.delete('/user/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, function (err, user) {
      if(err)
        return res.status(500).send("There was a problem deleting the user.");

      res.status(200).send("User "+ user.username +" was deleted.");
  });

});

// PUT /user/:id
router.put('/user/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, user) {
    if(err)
      return res.status(500).send("There was a problem updating the user.");

    res.status(200).send(user);
  });
});

// GET /activities
// POST /activity

// GET /tours
// POST /tour
// GET /tours/:id
// PATCH /tours/:id
// DELETE /tours/:id

module.exports = router;
