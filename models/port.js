var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var portSchema = new Schema ({
    location: {
        type: String,
        required: true
    },
    terminal: {
        type: Array,
        default: ['None Listed']
    },
    seamanCenter: {
        type: Array,
        default: ['None Listed']
    },
    groceries: {
        type: Array,
        default: ['None Listed']
    },
    restaurants: {
        type: Array,
        default: ['None Listed']
    },
    attractions: {
        type: Array,
        default: ['None Listed']
    }
});

module.exports = mongoose.model('Port', portSchema);