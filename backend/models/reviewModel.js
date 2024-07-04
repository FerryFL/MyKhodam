// Installation and configuration
const mongoose = require('mongoose')

// Create schema
const Schema = mongoose.Schema
const reviewSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    }
},{timestamps: true})

module.exports = mongoose.model('Review', reviewSchema)