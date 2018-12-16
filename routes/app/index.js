var express = require('express'),
    app = express.Router();

var challenge = require('./challenge');

app.use('/', (req, res) => {
    res.json({ message: 'You are hitting the root of the app' });
})

app.use('/challenge', challenge);

module.exports = app;