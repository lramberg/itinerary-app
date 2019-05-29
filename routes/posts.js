var express = require('express');
var router = express.Router();
var postsCtrl = require('../controllers/posts');

router.post('/:id/posts', postsCtrl.create);

module.exports = router;