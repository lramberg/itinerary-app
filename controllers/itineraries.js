var Itinerary = require('../models/itinerary');
var Port = require('../models/port');

module.exports = {
    index,
    new: newItinerary,
    create,
    show,
    addPort,
    delete: deleteItin
}

function deleteItin(req, res, next) {
    Itinerary.findByIdAndDelete(req.params.id, function(err) {
        res.redirect('/itineraries');
    })
}

function addPort(req, res) {
    Itinerary.findById(req.params.id, function(err, itinerary) {
        itinerary.ports.push(req.body.portId);
        console.log(Itinerary);
        itinerary.save(function(err) {
            res.redirect(`/itineraries/${itinerary._id}`);
        });
    });
}

function show(req, res) {
    Itinerary.findById(req.params.id)
    .populate('ports').exec(function(err, itinerary) {
        Port.find({})
        .exec(function(err, ports) {
            res.render('itineraries/show', {
                itinerary,
                ports
            });
            console.log('ports: ', ports);
        });
    }); 
}

function create(req, res) {
    Itinerary.create(req.body, function(err, itinerary) {
        req.user.itineraries.push(itinerary);
        req.user.save(function(err){
            res.redirect('/itineraries');
        })
    });
}

function newItinerary(req, res) {
    res.render('itineraries/new');
}

function index(req, res) {
    Itinerary.find({}, function(err, itineraries) {
        res.render('itineraries/index', {
            itineraries
        });
    });
}