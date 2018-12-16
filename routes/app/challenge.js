var express = require('express'),
    challenge = express.Router();

challenge.route('/')
    .get((req, res) => {
        res.json({ message: 'You are hitting the challenge' });
    });

module.exports = challenge;