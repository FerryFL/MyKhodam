// Installation and configuration
const mongoose = require('mongoose')

// Import model
const User = require('../models/userModel')

const getUsers = async (req,res) => {
    try{
        const users = await User.find({}).sort({createdAt: -1})
        res.status(200).json(users)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

const getRandomUser = async(req,res) => {
    const random = await User.aggregate([{$sample: {size:1}}])
    res.status(200).json(random)
}

const postUser = async(req,res) =>{
    const {user} = req.body
    
    try{
        const users = await User.create({user})
        res.status(200).json(users)
    }catch(error){
        return res.status(400).json({error: error.message})
    }
}

const patchUser = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'User Not Found'})
    }

    const user = await User.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if(!user){
        return res.status(404).json({error: 'User Not Found'})
    }

    res.status(200).json(user)
}

const deleteUser = async (req,res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "User Not Found"})
    }

    const user = await User.findOneAndDelete({_id:id})

    if(!user){
        return res.status(404).json({error: "User Not Found"})
    }

    res.status(200).json(user)
}

module.exports = {
    getUsers,
    getRandomUser,
    postUser,
    patchUser,
    deleteUser
}