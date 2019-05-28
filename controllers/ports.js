var Port = require('../models/port');

module.exports = {
    new: newPort,
    create,
    index,
    show
}

function show(req, res) {
    Port.findById(req.params.id, function(err, port) {
        res.render('ports/show', {
            port: port
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