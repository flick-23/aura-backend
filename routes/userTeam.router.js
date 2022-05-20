var express = require("express");
var router = express.Router();
const UserTeamController = require("../controllers/userTeam.controller");

router.get("/", UserTeamController.getAll);
router.get("/:id&:userId", UserTeamController.getEventByIdAndUsn);

module.exports = router;
