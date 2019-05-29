var Post = require('../models/post');
var Port = require('../models/port');

module.exports = {
    create
}

function create(req, res) {
    var post = new Post;
    // console.log(req)
    // console.log(req.body)
    console.log(req.body.category)
    console.log(req.body.content)
    Port.findById(req.params.id, function(err, port) {
        if (req.body.category == 'terminal') {port.terminal.push(req.body.content)};
        if (req.body.category == 'seamanCenter') {port.seamanCenter.push(req.body.content)};
        if (req.body.category == 'groceries') {port.groceries.push(req.body.content)};
        if (req.body.category == 'restaurants') {port.restaurants.push(req.body.content)};
        if (req.body.category == 'attractions') {port.attractions.push(req.body.content)};

        console.log(post.category);
        port.save(function(err){
            res.redirect(`/ports/${port._id}`)
        });
    });
}
