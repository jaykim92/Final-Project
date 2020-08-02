// packages
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan")
// express setup
const app = express();
const PORT = process.env.PORT || 3001;

app.use(logger("dev"));

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// serve static assets for deployment
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// conncetion to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/users");

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});