var express = require("express");
var router = express.Router();
const UserTeamController = require("../controllers/userTeam.controller");

router.get("/", UserTeamController.getAll);
router.get("/:userId", UserTeamController.getEventByUsn);

module.exports = router;
