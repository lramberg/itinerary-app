var express = require('express');
var router = express.Router();
var itinerariesCtrl = require('../controllers/itineraries');

router.get('/new', itinerariesCtrl.new);

module.exports = router;