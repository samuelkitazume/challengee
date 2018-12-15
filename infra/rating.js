var mongoose = require("mongoose");

var RatingSchema = new mongoose.Schema({
    user: "string",
    match: "string",
    rating: "string"
}, { timestamps: true });

var Rating = mongoose.model("rating", RatingSchema);

module.exports = Rating;