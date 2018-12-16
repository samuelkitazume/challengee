var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    name: "string",
    email: "string",
    tokens: {
        id_token: "string",
        access_token: "string",
        expiry_date: "string",
        token_type: "string",
        scope: "string"
    }
}, { timestamps: true });

var User = mongoose.model("user", UserSchema);

module.exports = User;