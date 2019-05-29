var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = new Schema ({
    name: String,
    email: String,
    googleId: String,
    itineraries: [{type: Schema.Types.ObjectId, ref: 'Itinerary'}]
}, {
    timestamps: true
});

module.exports = mongoose.model('Member', memberSchema);