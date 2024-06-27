const express = require('express')

const router = express.Router()

const {
    getUsers,
    getRandomUser,
    createUser,
    patchUser,
    deleteUser
} = require('../controllers/userController')

// get one random user
router.get('/random', getRandomUser)

// get users
router.get('/', getUsers)

// post new user
router.post('/', createUser)

// delete new user
router.delete('/:id', deleteUser)

// patch new user
router.patch('/:id', patchUser)

module.exports = router