const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    userId: {
        type: ObjectId,
        required: true
    },
    collectionPointsId: {
        type: ObjectId,
        required: true
    },
    discardedEwaste: {
        type: Array,
        required: true
    },
    discardedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('interaction', noteSchema);