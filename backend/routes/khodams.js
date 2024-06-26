const express = require('express')

//import all methods from controller
const {
    getKhodams,
    getKhodam,
    getRandomKhodam,
    createKhodam,
    deleteKhodam,
    patchKhodam
} = require('../controllers/khodamController')

//init router
const router = express.Router()

//get one random khodam
router.get('/random', getRandomKhodam)

//get all khodam
router.get('/', getKhodams )

//get one khodam
router.get('/:id', getKhodam)

//create new khodam
router.post('/', createKhodam)

//delete khodam
router.delete('/:id', deleteKhodam)

//patch khodam
router.patch('/:id', patchKhodam)

//export the routes
module.exports = router