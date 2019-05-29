var express = require('express');
var router = express.Router();
var portsCtrl = require('../controllers/ports');

// GET /ports
router.get('/', portsCtrl.index);
router.get('/new', portsCtrl.new);
router.get('/:id', portsCtrl.show);
router.post('/', isLoggedIn, portsCtrl.create);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;