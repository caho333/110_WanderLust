// router.js

const express = require('express');
const router = express.Router();

// set up port
const API_PORT = process.env.API_PORT || 3001;

router.get('/', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

module.exports = router;

/* EOF */