"use strict";
const CONFIG = require("../config");

module.exports = function (sequelize, Sequelize) {
  const UserTeam = sequelize.define("UserTeam", {
    id: { autoIncrement: true, primaryKey: true, type: Sequelize.BIGINT },
    teamId: {
      type: Sequelize.BIGINT,
      references: {
        model: "teams",
        key: "id",
      },
    },
    userId: {
      type: Sequelize.STRING,
      references: {
        model: "users",
        key: "usn",
      },
    },
    status: {
      type: Sequelize.ENUM("active", "inactive"),
      defaultValue: "active",
    },
  });
  UserTeam.associate = function (models) {};
  return UserTeam;
};