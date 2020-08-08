import React from "react";
import { Link } from "react-router-dom";
import { FIND_LOCATION } from "../../utils/actions";
import "./styles.css";
import { useAppContext } from "../../utils/GlobalState";



const User = require("mongoose").model("User");
const PassportLocalStrategy = require("passport-local").Strategy;

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
    session: false,
    passReqToCallback: true
  },
  (req, email, password, done) => {
    const userData = {
      email: email.trim(),
      password: password.trim(),
      name: req.body.name.trim()
    };

    const newUser = new User(userData);
    newUser.save((err) => {
      if (err) {
        return done(err);
      }

      return done(null);
    });
  }
);


export default Signup;