const express = require('express')

const router = express.Router()

const {
    getRandomUser,
    createUser
} = require('../controllers/userController')

// get one random name
router.get('/', getRandomUser)

// post new name
router.post('/', createUser)

module.exports = router