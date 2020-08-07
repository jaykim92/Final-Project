// packages
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const passport = require('passport')
// express setup
const app = express();
const PORT = process.env.PORT || 3001;

//routes
const authCheckMiddleware = require('./server/middleware/authorization');
const passportRoute = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api')

//morgan logger
app.use(logger("dev"));

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// serve static assets for deployment
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware

app.get('/api/get_user', authCheckMiddleware);


app.use("/auth", passportRoute)
app.use("/api", apiRoutes)
// connection to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/users");

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});