var express = require("express");
var router = express.Router();
const TeamController = require("../controllers/team.controller");

router.get("/", TeamController.getAllTeams);
router.get("/:userId", TeamController.getTeamByUsn);
router.get("/teamWise/:id", TeamController.getTeamById);
router.get("/eventWise/:id", TeamController.getTeamByEventId);

module.exports = router;
