const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    userId: {
        type: String,
        required: true
    },
    collectionPointsId: {
        type: String,
        required: true
    },
    discardedEwaste: {
        type: Array,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    },
    discardedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('interaction', noteSchema);