var express = require('express');
var router = express.Router();
const UserController = require('../controllers/user.controller');
const authorize = require('../_helpers/authorize');

router.post('/register', UserController.register);
router.post('/authenticate', UserController.authenticate);     // public route
// router.get('/', authorize(), UserController.getAll); // admin only
router.get('/',  UserController.getAll); // admin only
router.get('/:id', authorize(), UserController.getById);       // all authenticated users
router.get('/userData/:id', UserController.getByUsn);       
router.get('/transaction/data', UserController.getAllPayData);       

module.exports = router;
