// packages
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
const SALT_ROUNDS = 10;

// create user schema
const userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true, default: "dummy"},
    lastName: {type: String, required: true, default: "dummy"},
    latitude: {type: Number, required: true, default: 23},
    longitude: {type: Number, required: true, default: 21}
});

// compare inputted password to the hashed pw in the database
userSchema.pre("save", async function(){
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return
})

userSchema.methods.comparePassword = function comparePassword(password, callback) {
    bcrypt.compare(password, this.password, callback);
};

const User = mongoose.model("User", userSchema);
module.exports = User;