const CONFIG = require("../config");
const models = require("../models/index");
const { to, ReE, ReS } = require("../services/utils.service");
const asyncRoute =
  (route) =>
  (req, res, next = console.error) =>
    Promise.resolve(route(req, res)).catch(next);

const create = function (req, res) {
  models.Team.create({
    eventId: req.body.eventId,
    name: req.body.name,
    usn_1: req.body.usn[0],
    usn_2: req.body.usn[1],
    usn_3: req.body.usn[2],
    usn_4: req.body.usn[3],
    usn_5: req.body.usn[4],
  })
    .then((team) => ReS(res, team, 200))
    .catch((err) => ReE(res, err, 422));
};
module.exports.create = create;
