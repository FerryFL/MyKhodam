// Installation and configuration
const express = require('express')
const router = express.Router()

// Import methods from controller
const {
    getKhodams,
    getKhodam,
    getRandomKhodam,
    getHashKhodam,
    postKhodam,
    deleteKhodam,
    patchKhodam,
} = require('../controllers/khodamController')

// Get one random khodam
router.get('/random', getRandomKhodam)

// Get one hashed khodam
router.get('/hash', getHashKhodam)

// Get all khodams
router.get('/', getKhodams )

// Get one khodam
router.get('/:id', getKhodam)

// Create new khodam
router.post('/', postKhodam)

// Delete khodam
router.delete('/:id', deleteKhodam)

// Patch khodam
router.patch('/:id', patchKhodam)

module.exports = router