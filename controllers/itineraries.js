var Itinerary = require('../models/itinerary');
var Port = require('../models/port');
var Member = require('../models/member');

module.exports = {
    index,
    new: newItinerary,
    create,
    show,
    addPort,
    delete: deleteItin,
    edit,
    update
}

function edit(req, res, next) {
    Itinerary.findById(req.params.id)
        .populate('ports').exec(function (err, itinerary) {
            Port.find({ _id: { $in: itinerary.ports } })
                .exec(function (err, ports) {
                    res.render('itineraries/edit', {
                        itinerary,
                        ports
                    });
                })
        })
}

function update(req, res) {
    console.log('req.body: ', req.body);
    Itinerary.findByIdAndUpdate(req.params.id, req.body, function (err, itinerary) {
        itinerary.save(function (err) {
            res.redirect(`/itineraries/${req.params.id}`);
        });
    });
}

function deleteItin(req, res, next) {
    Itinerary.findByIdAndDelete(req.params.id, function (err) {
        res.redirect('/itineraries');
    })
}

function addPort(req, res) {
    Itinerary.findById(req.params.id, function (err, itinerary) {
        itinerary.ports.push(req.body.portId);
        console.log('itinerary ', Itinerary);
        itinerary.save(function (err) {
            res.redirect(`/itineraries/${itinerary._id}`);
        });
    });
}

function show(req, res) {
    Member.find({}).exec(function (err, members) {
        Itinerary.findById(req.params.id)
            .populate('ports').exec(function (err, itinerary) {
                Port.find({}).exec(function (err, ports) {
                    if (req.user) {
                        Member.findById(req.user._id).exec(function (err, sessionUser) {
                            res.render('itineraries/show', { itinerary, ports, sessionUser });
                        });
                    } else {
                        res.render('itineraries/show', { itinerary, ports, sessionUser: null });
                    }
                });
            });
    });
}

function create(req, res) {
    Member.findById(req.user._id).exec(function(err, member) {
        Itinerary.create(req.body, function (err, itinerary) {
            itinerary.userId = member._id;
            req.user.itineraries.push(itinerary);
            itinerary.save();
            req.user.save(function (err) {
                res.redirect('/itineraries');
            })
        });
    });
}

function newItinerary(req, res) {
    res.render('itineraries/new');
}

function index(req, res) {
    Member.findById(req.user._id).exec(function(err, sessionUser){
        Itinerary.find({}, function (err, itineraries) {
            res.render('itineraries/index', {
                itineraries, sessionUser
            });
        });
    });
}