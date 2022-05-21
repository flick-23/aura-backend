const CONFIG = require('../config');
const models = require('../models/index');
const {to, ReE, ReS } = require('../services/utils.service');
const userService = require("../services/auth.service");
const authService = require('../services/auth.service');

const create = function (req, res) {
    let hash = authService.getHash(req.body.password);
    // console.log("REQUEST:" + JSON.stringify(req));
    models.Coord.create({
        // image: req.files['image'][0].filename,
        name: req.body.name,
        eventId: req.body.eventId,
        phone: req.body.phone,
        email: req.body.email,
        usn: req.body.usn,
        coordUid: req.body.coordUid,
        password: hash,
        coordRole: req.body.coordRole,
    }).then(coord => ReS(res, coord, 200))
        .catch(err => ReE(res, err, 422));
};
module.exports.create = create;

function authenticate(req, res, next) {
    userService.authenticateCoord(req.body)
        .then(user => {user ? ReS(res, user, 200) : ReE(res, { message: 'Username or password is incorrect' }, 422)})
        .catch(err => next(err));
}module.exports.authenticate = authenticate;

const update = function (req, res) {
    models.Coord.update({
        image: '',
        coordName: req.body.coordName,
        coordContact: req.body.coordContact,
        coordEmail: req.body.coordEmail,
        coordUsn: req.body.coordUsn,
        coordUid: req.body.coordUid,
        coordRole: req.body.coordRole,
    },{
        where: {id: req.params.id}
    }).then(coord => ReS(res, coord, 200))
        .catch(err => ReE(res, err, 422));
};
module.exports.update = update;

const remove = function (req, res) {
    models.Coord.destroy({
        where: {id: req.params.id}
    }).then(coord => ReS(res, coord, 200))
        .catch(err => ReE(res, err, 422));
};
module.exports.remove = remove;

const getAll = function (req, res) {
    models.Coord.findAll()
        .then(coord => ReS(res, coord, 200))
        .catch(err => ReE(res, err, 422));
};
module.exports.getAll = getAll;

const getOne = function (req, res) {
    models.Coord.findOne({
        where: {id: req.params.id}
    })
        .then(coord => ReS(res, coord, 200))
        .catch(err => ReE(res, err, 422));
};
module.exports.getOne = getOne;

const getByPh = function (req, res) {
    models.Coord.findOne({
        where: {coordContact: req.params.contact}
    })
        .then(coord => ReS(res, coord, 200))
        .catch(err => ReE(res, err, 422));
};
module.exports.getByPh = getByPh;
