"use strict";
const CONFIG = require("../config");

module.exports = function (sequelize, Sequelize) {
  const Team = sequelize.define("Team", {
    eventId: { type: Sequelize.BIGINT },
    id: { autoIncrement: true, primaryKey: true, type: Sequelize.BIGINT },
    name: { type: Sequelize.STRING },
    usn_1: { type: Sequelize.STRING },
    usn_2: { type: Sequelize.STRING, default: null },
    usn_3: { type: Sequelize.STRING, default: null },
    usn_4: { type: Sequelize.STRING, default: null },
    usn_5: { type: Sequelize.STRING, default: null },
    status: {
      type: Sequelize.ENUM("active", "inactive"),
      defaultValue: "active",
    },
  });
  Team.associate = function (models) {};
  return Team;
};
