var mongoose = require("mongoose");

var ChallengeSchema = new mongoose.Schema({
    challenger: "string",
    category: "string",
    hash: "string",
    status: "number",
    acceptedBy: "string"
}, { timestamps: true });

var Challenge = mongoose.model("challenge", ChallengeSchema);

module.exports = Challenge;