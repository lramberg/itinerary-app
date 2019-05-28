var Member = require('../models/member');

module.exports = {
    index
}


function index(req, res, next) {
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    let sortKey = req.query.sort || 'name';
    Member.findById(req.user._id)
    .sort(sortKey).exec(function(err, member) {
        console.log(member)
        if (err) return next(err);
        res.render('members/index', {
            member,
            user: req.user,
            name: req.query.name,
            sortKey
          });
    });
}
