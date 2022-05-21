'use strict';
const CONFIG = require('../config');

module.exports = function (sequelize, Sequelize) {
    const Coord = sequelize.define('Coord', {
        id: {autoIncrement: true, primaryKey: true, type: Sequelize.BIGINT},
        image: {type: Sequelize.STRING},
        name: {type: Sequelize.STRING},
        eventId: {type: Sequelize.STRING},
        email: {type: Sequelize.STRING},
        phone: {type: Sequelize.STRING},
        usn: {type: Sequelize.STRING},
        coordUid: {type: Sequelize.STRING},
        password: {type: Sequelize.STRING},
        coordRole: {type: Sequelize.STRING},
        status:
            {type: Sequelize.ENUM('active', 'inactive'), defaultValue: 'active'}
    });
    Coord.associate = function(models) {
    };
    return Coord;
};
