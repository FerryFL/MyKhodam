// Installation and configuration
const express = require('express')
const router = express.Router()

// Import methods from controller
const {
    getReview,
    getReviews,
    postReview,
    patchReview,
    deleteReview
} = require('../controllers/reviewController')

// Get all reviews
router.get('/', getReviews)

// Get one review
router.get('/:id', getReview)

// Create new review
router.post('/', postReview)

// Update a review
router.patch('/:id', patchReview)

// Delete a review
router.delete('/:id', deleteReview)

module.exports = router