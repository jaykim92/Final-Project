const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {},
    password: {},
    firstName: {},
    lastName: {},
    longitude: {},
    latitude: {}
});

const User = mongoose.model("User", userSchema);

module.exports = User;