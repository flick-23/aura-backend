"use strict";
const CONFIG = require("../config");

module.exports = function (sequelize, Sequelize) {
  const Registration = sequelize.define("Registration", {
    id: { autoIncrement: true, primaryKey: true, type: Sequelize.BIGINT },
    teamId: {
      type: Sequelize.BIGINT,
    },
    eventId: {
      type: Sequelize.BIGINT,
    },
    status: {
      type: Sequelize.ENUM("active", "inactive"),
      defaultValue: "active",
    },
  });
  Registration.associate = function (models) {};
  return Registration;
};
