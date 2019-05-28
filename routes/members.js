var express = require('express');
var router = express.Router();
var membersCtrl = require('../controllers/members');

/* GET /members */
router.get('/index', membersCtrl.index);

module.exports = router;
