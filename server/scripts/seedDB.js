// packages
const faker = require("faker");
const mongoose = require("mongoose");

// imports
const db = require("../models/user");

// functions for random coordinates
function getLat(min, max) {
  return Math.random() * (max - min) + min;
}

function getLong(min, max) {
  return Math.random() * (max - min) + min;
}

// functions for pushing to creating random seed
let userSeed = [];


function getUsers() {
  let randomUser = {
    email: faker.internet.email(),
    password: faker.internet.password(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    latitude: getLat(33.6, 33.75),
    longitude: getLong(-117.9, -117.71)
  };
  return randomUser;
}

function fillArray() {
    for (let i = 0; i < 200; i++) {
        let object = getUsers();
        userSeed.push(object);
    };
}

fillArray();

// connect to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/users");

// insert data from userSeed array to MongoDB, remove any collections if any exist
db.deleteMany({})
  .then(() => db.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + "records inserted");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
