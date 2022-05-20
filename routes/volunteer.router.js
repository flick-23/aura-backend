var express = require("express");
var router = express.Router();
const VolunteerController = require("../controllers/volunteer.controller");

router.post("/", VolunteerController.create);
router.get("/", VolunteerController.getAll);
router.get("/:id", VolunteerController.getEventById);
router.get("/getlist/:userId", VolunteerController.getEventByUsn);

module.exports = router;
