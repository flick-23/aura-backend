const CONFIG = require("../config");
const models = require("../models/index");
const { to, ReE, ReS } = require("../services/utils.service");

const getAll = function (req, res) {
  models.UserTeam.findAll()
    .then((coord) => ReS(res, coord, 200))
    .catch((err) => ReE(res, err, 422));
};
module.exports.getAll = getAll;

const getEventByUsn = function (req, res) {
  models.UserTeam.findAll({
    where: {
      userId: req.params.userId,
    },
  })
    .then((coord) => ReS(res, coord, 200))
    .catch((err) => ReE(res, err, 422));
};
module.exports.getEventByUsn = getEventByUsn;

const getEventById = function (req, res) {
  models.UserTeam.findAll({
    where: {
      eventId: req.params.id,
    },
  })
    .then((coord) => ReS(res, coord, 200))
    .catch((err) => ReE(res, err, 422));
};
module.exports.getEventById = getEventById;
