// packages
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// other imports
const Schema = mongoose.Schema;
const SALT_ROUNDS = 10;

// create user schema
const userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    lat: {type: Number, default: 33.38},
    lng: {type: Number, default: -117.5}
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