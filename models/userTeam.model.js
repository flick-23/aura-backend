"use strict";
const CONFIG = require("../config");

module.exports = function (sequelize, Sequelize) {
  const UserTeam = sequelize.define("UserTeam", {
    id: { autoIncrement: true, primaryKey: true, type: Sequelize.BIGINT },
    teamId: {
      type: Sequelize.BIGINT,
    },
    userId: {
      type: Sequelize.STRING,
    },
    eventId: {
      type: Sequelize.BIGINT,
    },
    eventName: {
      type: Sequelize.STRING,
    },
    poster: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.ENUM("active", "inactive"),
      defaultValue: "active",
    },
  });
  UserTeam.associate = function (models) {};
  return UserTeam;
};
