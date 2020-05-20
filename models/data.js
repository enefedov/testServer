const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listTaskSchema = new Schema({
    userId: {
        type: String,
    },
    title: {
        type: String,
    },
    completed: {
        type: Boolean,
    }
});

const ListTask = mongoose.model('ListTask', listTaskSchema);

module.exports = ListTask;