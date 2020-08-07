// packages
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

// create user schema
const userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true}
});

// compare inputted password to the hashed pw in the database
userSchema.methods.comparePassword = function comparePassword(password, callback) {
    bcrypt.compare(password, this.password, callback);
};

const User = mongoose.model("User", userSchema);
module.exports = User;