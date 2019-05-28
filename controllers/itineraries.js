var Itinerary = require('../models/itinerary');

module.exports = {
    new: newItinerary
}

function newItinerary(req, res) {
    res.render('itineraries/new')
}