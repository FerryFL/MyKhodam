const Nama = require('../models/userModel')

const getRandomUser = async(req,res) => {
    const random = await Nama.aggregate([{$sample: {size:1}}])
    res.status(200).json(random)
}

const createUser = async(req,res) =>{
    const {user} = req.body
    
    try{
        const users = await Nama.create({user})
        res.status(200).json(users)
    }catch(error){
        return req.status(400).json({error: error.msg})
    }
}

module.exports = {
    getRandomUser,
    createUser
}