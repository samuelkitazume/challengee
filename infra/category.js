var mongoose = require("mongoose");

var CategorySchema = new mongoose.Schema({
    name: "string",
}, { timestamps: true });

var Category = mongoose.model("category", CategorySchema);

module.exports = Category;