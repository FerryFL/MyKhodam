const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ideaSchema = new Schema({
    contributor: {
        type: String,
        required: true
    },
    idea: {
        type: String,
        required: true
    }
}, {timestamp: true})

module.exports = mongoose.model('Idea',ideaSchema)