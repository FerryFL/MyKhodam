// Installation and configuration
const mongoose = require('mongoose')

// Import model
const User = require('../models/userModel')
const { findById } = require('../models/ideaModel')

// Get all users
const getUsers = async(req,res) => {
    try{
        const users = await User.find({}).sort({createdAt: -1})
        return res.status(200).json(users)
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

// Get one user
const getUser = async(req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "User Not Found"})
    }

    try{
        const user = await findById(id)

        if(!user){
            return res.status(404).json({error: "User Not Found"})
        }

        return res.status(200).json(user)
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

// Get random user
const getRandomUser = async(req,res) => {
    try{
        const random = await User.aggregate([{$sample: {size:1}}])
        return res.status(200).json(random)
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

// Create one user
const postUser = async(req,res) =>{
    const {user} = req.body
    
    try{
        const createUser = await User.create({user})
        return res.status(200).json(createUser)
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

// Update one user
const patchUser = async(req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "User Not Found"})
    }

    try{
        const user = await User.findOneAndUpdate(
            {_id:id},
            {...req.body},
            {new: true}
        )
    
        if(!user){
            return res.status(404).json({error: "User Not Found"})
        }
    
        return res.status(200).json(user)
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

// Delete one user
const deleteUser = async(req,res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "User Not Found"})
    }

    try{
        const user = await User.findOneAndDelete(
            {_id:id}
        )

        if(!user){
            return res.status(404).json({error: "User Not Found"})
        }
    
        return res.status(200).json(user)
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    getUsers,
    getUser,
    getRandomUser,
    postUser,
    patchUser,
    deleteUser
}