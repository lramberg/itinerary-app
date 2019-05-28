var Member = require('../models/member');

module.exports = {
    index
}

function index(req, res, next) {
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    let sortKey = req.query.sort || 'name';
    Member.find(modelQuery)
    .sort(sortKey).exec(function(err, members) {
        if (err) return next(err);
        res.render('members/index', {
            members,
            user: req.user,
            name: req.query.name,
            sortKey
          });
    });
}
