const {User}  = require("../models")
const PassportLocalStrategy = require('passport-local').Strategy;
const bcrypt = require("bcryptjs");

// set up new local strategy to create account
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim(),
    firstName: req.body.firstName.trim(),
    lastName: req.body.lastName.trim(),
    lat: req.body.latitude,
    lng: req.body.longitude
  };

  const newUser = new User(userData);
  newUser.save((err) => {
    if (err) { return done(err); }

    return done(null);
  });
});