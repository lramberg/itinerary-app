var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = new Schema ({
    name: String,
    email: String,
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Member', memberSchema);