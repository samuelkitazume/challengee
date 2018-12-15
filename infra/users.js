var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    googleKey: "string",
    name: "string",
    email: "string"
}, { timestamps: true });

var User = mongoose.model("user", UserSchema);

module.exports = User;