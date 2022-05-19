const CONFIG = require("../config");
const models = require("../models/index");
const { to, ReE, ReS } = require("../services/utils.service");
const asyncRoute =
  (route) =>
  (req, res, next = console.error) =>
    Promise.resolve(route(req, res)).catch(next);

const create = async function (req, res) {
  const user = await models.User.findAll();
  const userUsn = user.map((u) => {
    return u.dataValues.usn;
  });

  const usn = req.body.usn.filter((u) => u != "");

  const containsAll = usn.every((element) => {
    return userUsn.indexOf(element) !== -1;
  });

  if (containsAll) {
    models.Team.create({
      eventId: req.body.eventId,
      name: req.body.name,
      usn_1: req.body.usn[0].toUpperCase(),
      usn_2: req.body.usn[1].toUpperCase(),
      usn_3: req.body.usn[2].toUpperCase(),
      usn_4: req.body.usn[3].toUpperCase(),
      usn_5: req.body.usn[4].toUpperCase(),
    })
      .then((team) => {
        const teamData = team.dataValues.id;

        models.Registration.create({
          teamId: teamData,
          eventId: req.body.eventId,
        });

        ReS(res, team, 200);
      })
      .catch((err) => ReE(res, err, 422));
  } else {
    res.send(404);
  }
};
module.exports.create = create;
