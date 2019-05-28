var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var portSchema = new Schema ({
    location: String
});

module.exports = mongoose.model('Port', portSchema);