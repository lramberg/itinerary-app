var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema ({
    portId: String,
    userId: String,
    category: String,
    content: String
});

module.exports = mongoose.model('Post', postSchema);