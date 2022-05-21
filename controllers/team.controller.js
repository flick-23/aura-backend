const CONFIG = require("../config");
const models = require("../models/index");
const { to, ReE, ReS } = require("../services/utils.service");

const getAllTeams = function (req, res) {
  models.Team.findAll()
    .then((coord) => ReS(res, coord, 200))
    .catch((err) => ReE(res, err, 422));
};
module.exports.getAllTeams = getAllTeams;

const getTeamByUsn = function (req, res) {
  models.Team.findAll({
    where: {
      userId: req.params.userId,
    },
  })
    .then((coord) => ReS(res, coord, 200))
    .catch((err) => ReE(res, err, 422));
};
module.exports.getTeamByUsn = getTeamByUsn;

const getTeamById = function (req, res) {
  models.Team.findAll({
    where: {
      id: req.params.id,
    },
  })
    .then((coord) => ReS(res, coord, 200))
    .catch((err) => ReE(res, err, 422));
};
module.exports.getTeamById = getTeamById;
