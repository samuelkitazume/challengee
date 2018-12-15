var mongoose = require("mongoose");

var ScoreSchema = new mongoose.Schema({
    match: "string",
    challenger: {
        id: "string",
        points: "number"
    },
    challenged: {
        id: "string",
        points: "number"
    }
}, { timestamps: true });

var Score = mongoose.model("score", ScoreSchema);

module.exports = Score;