// Installation and configuration
const mongoose = require('mongoose')

// Create schema
const Schema = mongoose.Schema
const khodamSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Khodam', khodamSchema)