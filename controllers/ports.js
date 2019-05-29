var Port = require('../models/port');
var Post = require('../models/post');

module.exports = {
    new: newPort,
    create,
    index,
    show
}

function show(req, res) {
    Port.findById(req.params.id).exec(function(err, port) {
        Post.find({portId: req.params.id}).exec(function(err, posts) {
            console.log(posts)
            res.render('ports/show', {
                posts, port
            });
        });
    });
}

function index(req, res) {
    Port.find({}, function(err, ports){
        res.render('ports/index', {
            ports: ports
        });
    })
}

function create(req, res) {
    var port = new Port(req.body);
    port.save(function(err) {
        if (err) return res.redirect('/new');
        console.log(port);
        res.redirect('/ports');
    });
}

function newPort(req, res) {
    res.render('ports/new')
}