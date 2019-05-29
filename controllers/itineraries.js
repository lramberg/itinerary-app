var Itinerary = require('../models/itinerary');
var Port = require('../models/port');

module.exports = {
    index,
    new: newItinerary,
    create,
    show
}

function show(req, res) {
    Itinerary.findById(req.params.id)
    .populate('ports').exec(function(err, itinerary) {
        Port.find({_id: { $nin: itinerary.ports } }) 
        .exec(function(err, ports) {
            res.render('itineraries/show', {
                itineraries,
                ports
            });
        });
    }); 
}

function create(req, res) {
    Itinerary.create(req.body, function(err, itineraries) {
        res.redirect('/itineraries');
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