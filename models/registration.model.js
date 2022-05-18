"use strict";
const CONFIG = require("../config");

module.exports = function (sequelize, Sequelize) {
  const Registration = sequelize.define("Registration", {
    id: { autoIncrement: true, primaryKey: true, type: Sequelize.BIGINT },
    teamId: {
      type: Sequelize.BIGINT,
      references: {
        model: "teams",
        key: "id",
      },
    },
    eventId: {
      type: Sequelize.BIGINT,
      references: {
        model: "events",
        key: "id",
      },
    },
    status: {
      type: Sequelize.ENUM("active", "inactive"),
      defaultValue: "active",
    },
  });
  Registration.associate = function (models) {};
  return Registration;
};
