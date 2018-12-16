var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    server = express();

var runApp = require('./runApp');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/challengee', {})
    .then(() => { runApp(server) }, (err) => { console.err(err) });