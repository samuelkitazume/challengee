var express = require('express'),
    auth = express.Router();

auth.all(['/app/','/app/*'], (req, res, next) => {
    if (!req.headers.authorization) {
        res.status(401).json({
            message: "Not authorized"
        });
    } else next();
});

module.exports = auth;