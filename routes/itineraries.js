var express = require('express');
var router = express.Router();
var itinerariesCtrl = require('../controllers/itineraries');

router.get('/', itinerariesCtrl.index);
router.get('/new', itinerariesCtrl.new);
router.get('/:id', itinerariesCtrl.show);
router.post('/', itinerariesCtrl.create);
router.post('/:id', itinerariesCtrl.addPort);
router.delete('/:id', itinerariesCtrl.delete);

module.exports = router;