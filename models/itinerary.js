var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itinerarySchema = new Schema ({
    name: String,
    description: String,
    userId: String,
    ports: [{type: Schema.Types.ObjectId, ref: 'Port'}]
});

module.exports = mongoose.model('Itinerary', itinerarySchema);