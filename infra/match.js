var mongoose = require("mongoose");

var MatchSchema = new mongoose.Schema({
    challenge: "string",
    winner: "string",
    loser: "string"
}, { timestamps: true });

var Match = mongoose.model("match", MatchSchema);

module.exports = Match;