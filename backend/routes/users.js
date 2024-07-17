// Installation and configuration
const express = require('express')
const router = express.Router()

// Import methods from controller
const {
    getUsers,
    getUser,
    getRandomUser,
    postUser,
    patchUser,
    deleteUser
} = require('../controllers/userController')

// Get one random user
router.get('/random', getRandomUser)

// Get all users
router.get('/', getUsers)

// Get one user
router.get('/:id', getUser)

// Create new user
router.post('/', postUser)

// Delete new user
router.delete('/:id', deleteUser)

// Patch new user
router.patch('/:id', patchUser)

module.exports = router