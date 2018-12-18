var express = require('express'),
    app = express.Router();

var UserModel = require('./../../infra/users');
var challenge = require('./challenge');

app.use('/challenge', challenge);

app.use('/', (req, res) => {    
    UserModel.findById(res.locals.userId, (err, user) => {
        if (err) res.status(500).json({ message: 'Some error occured' });
        res.json({ message: `You are in the root of the path app, ${user.name} :)` });
    })
})


module.exports = app;