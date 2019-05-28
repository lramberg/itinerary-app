var Member = require('../models/member');

module.exports = {
    index
}

function index(req, res, next) {
    res.render('members/index');
}