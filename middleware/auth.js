var express = require('express'),
    jwt = require('jsonwebtoken'),
    auth = express.Router();

var UserModel = require('./../infra/users');

auth.all(['/app/','/app/*'], (req, res, next) => {
    if (!req.headers.authorization) {
        res.status(401).json({
            message: "Not authorized"
        });
    } else {
        jwt.verify(req.headers.authorization, 'challengee', (err, token) => {
            if (err) res.status(403).json({ message: "Invalid token" });
            if (UserModel.findById(token.id)) {
                res.locals.userId = token.id;
                next();
            } else res.status(403).json({ message: "Invalid token" });
        });
    }
});

module.exports = auth;