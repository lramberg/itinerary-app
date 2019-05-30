var express = require('express');
var router = express.Router();
var itinerariesCtrl = require('../controllers/itineraries');

router.get('/', itinerariesCtrl.index);
router.get('/new', itinerariesCtrl.new);
router.get('/:id', itinerariesCtrl.show);
router.get('/:id/edit', itinerariesCtrl.edit);
router.post('/', itinerariesCtrl.create);
router.post('/:id', itinerariesCtrl.addPort);
router.put('/:id', itinerariesCtrl.update);
router.delete('/:id', itinerariesCtrl.delete);
// router.put('/:id/edit', itinerariesCtrl.removePort);

module.exports = router;