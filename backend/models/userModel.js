const mongoose = require('mongoose')

const Schema = mongoose.Schema

const namaSchema = new Schema({
    user: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('User', namaSchema)