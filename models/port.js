var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var portSchema = new Schema ({
    location: String,
    terminal: Array,
    seamanCenter: Array,
    groceries: Array,
    restaurants: Array,
    attractions: Array,
    // post: [postSchema]
});

module.exports = mongoose.model('Port', portSchema);