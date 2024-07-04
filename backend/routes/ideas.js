// Installation and configuration
const express = require('express')
const router = express()

// Import methods from controller
const {
    getIdeas,
    getIdea,
    postIdea,
    patchIdea,
    deleteIdea
} = require('../controllers/ideaController')

// Get all ideas
router.get('/', getIdeas)

// Get one idea
router.get('/:id', getIdea)

// Create new idea
router.post('/', postIdea)

// Delete one idea
router.delete('/:id', deleteIdea)

// Patch one idea
router.patch('/:id', patchIdea)

module.exports = router