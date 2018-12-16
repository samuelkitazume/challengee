var express = require('express'),
    main = express.Router();

main.route('/')
    .get((req, res) => {
        res.json({ message: 'You are in the root path :)' });
    });
    
main.use('/app', require('./app'));
main.use('/login', require('./login'));

module.exports = main;