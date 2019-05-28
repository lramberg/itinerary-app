var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itinerarySchema = new Schema ({
    name: String,
    ports: [String]
});

module.exports = mongoose.model('Itinerary', itinerarySchema);