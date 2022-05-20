"use strict";
const CONFIG = require("../config");

module.exports = function (sequelize, Sequelize) {
  const Volunteer = sequelize.define("Volunteer", {
    id: { autoIncrement: true, type: Sequelize.BIGINT, primaryKey: true },
    eventId: { type: Sequelize.BIGINT },
    userId: { type: Sequelize.STRING },
    status: {
      type: Sequelize.ENUM("active", "inactive"),
      defaultValue: "active",
    },
  });
  Volunteer.associate = function (models) {};
  return Volunteer;
};
