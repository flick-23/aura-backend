var express = require("express");
var router = express.Router();
const RegisterController = require("../controllers/registration.controller");

router.post("/", RegisterController.create);

module.exports = router;
