var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var portSchema = new Schema ({
    location: String,
    terminal: String,
    seamanCenter: String,
    groceries: String,
    restauraunts: String,
    attractions: String
});

module.exports = mongoose.model('Port', portSchema);