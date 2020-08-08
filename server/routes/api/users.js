const router = require("express").Router();
const usersController = require("../../server/controllers/usersController");


router.route("/")
  .get(usersController.getAll);

module.exports = router;