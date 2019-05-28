var express = require('express');
var router = express.Router();
var portsCtrl = require('../controllers/ports');

// GET /ports
router.get('/', portsCtrl.index);
router.get('/new', portsCtrl.new);
router.get('/:id', portsCtrl.show);
router.post('/', portsCtrl.create);

module.exports = router;