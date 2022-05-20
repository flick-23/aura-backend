const CONFIG = require("../config");
const models = require("../models/index");
const { to, ReE, ReS } = require("../services/utils.service");

const create = function (req, res) {
  models.Volunteer.create({
    eventId: req.body.eventId,
    eventName: req.body.eventName,
    poster: req.body.poster,
    userId: req.body.usn,
  })
    .then((notif) => ReS(res, notif, 200))
    .catch((err) => ReE(res, err, 422));
};
module.exports.create = create;

const getAll = function (req, res) {
  models.Volunteer.findAll()
    .then((coord) => ReS(res, coord, 200))
    .catch((err) => ReE(res, err, 422));
};
module.exports.getAll = getAll;

const getEventById = function (req, res) {
  models.Volunteer.findAll({
    where: {
      eventId: req.params.id,
    },
  })
    .then((coord) => ReS(res, coord, 200))
    .catch((err) => ReE(res, err, 422));
};
module.exports.getEventById = getEventById;

const getEventByUsn = function (req, res) {
  console.log("userId : ", req.params.userId);
  models.Volunteer.findAll({
    where: {
      userId: req.params.userId,
    },
  })
    .then((coord) => ReS(res, coord, 200))
    .catch((err) => ReE(res, err, 422));
};
module.exports.getEventByUsn = getEventByUsn;
