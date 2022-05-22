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

const getTeamByEventId = function (req, res) {
  let myArray = [];
  let myObj = {};
  let usns = [];
  let teams = [];
  let names = [];
  let numbers = [];
  let emails = [];
  models.Team.findAll({
    where: {
      eventId: req.params.id,
    },
  })
    .then((coord) => {
      //usns from coord.usn_1
      //team name from coord.name
      for (let i = 0; i < coord.length; i++) {
        myArray.push(
          [coord[i].usn_1, coord[i].name],
          [coord[i].usn_2, coord[i].name],
          [coord[i].usn_3, coord[i].name],
          [coord[i].usn_4, coord[i].name],
          [coord[i].usn_5, coord[i].name]
        );
      }
      myArray = myArray.filter((e) => {
        if (e[0] != "") {
          usns.push(e[0]);
          teams.push(e[1]);
        }
      });

      //usns, teams ready at this point
      for (let i = 0; i < usns.length; i++) {
        models.User.findAll({
          where: {
            usn: usns[i],
          },
        })
          .then((users) => {
            names.push(users[0].dataValues.name);
            numbers.push(users[0].dataValues.phone);
            emails.push(users[0].dataValues.email);
            if (names.length == usns.length) {
              ReS(res, { names, usns, teams, emails, numbers }, 200);
            }
          })
          .catch((err) => ReE(res, err, 422));
      }
    })
    .catch((err) => ReE(res, err, 422));
};
module.exports.getTeamByEventId = getTeamByEventId;
