// Installation and configuration
const CryptoJS = require('crypto-js');
const mongoose = require('mongoose')

// Import model
const Khodam = require('../models/khodamModel')

// Get all khodams
const getKhodams = async (req,res)=>{
    try{
        const khodams = await Khodam.find({}).sort({createdAt: -1})
        return res.status(200).json(khodams)
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

// Get one khodam
const getKhodam = async (req,res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Khodam Not Found"})
    }

    try{
        const khodam = await Khodam.findById(id)

        if(!khodam){
            return res.status(404).json({error: "Khodam Not Found"})
        }
        
        return res.status(200).json(khodam)
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

// Get random khodam
const getRandomKhodam = async (req,res) => {
    try{
        const random = await Khodam.aggregate([{$sample: {size:1}}])
        return res.status(200).json(random)
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

// input to hashed number
const hashToNumber = (input) => {
    const hash = CryptoJS.SHA256(input).toString()
    const hashNumber = parseInt(hash, 16)
    return hashNumber
}

// Get one hashed khodam
const getHashKhodam = async(req, res) => {
    const { nama } = req.query

    try {

        const today = new Date().getDate()
        const day = today.getDate()

        const hashNumber = hashToNumber(nama)
        const multipliedNumber = hashNumber * day

        const totalCount = await Khodam.countDocuments()

        if (totalCount === 0) {
            return res.status(404).json({ error: "No Khodam Available" })
        }

        const finalIndex = multipliedNumber % totalCount
        const khodam = await Khodam.findOne().skip(finalIndex)

        if (!khodam) {
            return res.status(404).json({error: "Khodam not found" })
        }

        return res.status(200).json(khodam);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

// Create one khodam
const postKhodam = async (req,res)=>{
    const {name} = req.body
    
    try{
        const createKhodam = await Khodam.create({name})
        return res.status(200).json(createKhodam)
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

// Delete one khodam
const deleteKhodam = async (req,res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Khodam Not Found"})
    }

    try{
        const khodam = await Khodam.findOneAndDelete(
            {_id:id}
        )

        if(!khodam){
            return res.status(404).json({error: "Khodam Not Found"})
        }
    
        return res.status(200).json(khodam)
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

// Update one khodam
const patchKhodam = async(req,res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Khodam Not Found"})
    }

    const khodam = await Khodam.findOneAndUpdate(
        {_id:id},
        {...req.body},
        {new: true}
    )

    if(!khodam){
        return res.status(404).json({error: "Khodam Not Found"})
    }

    return res.status(200).json(khodam)
}

module.exports = {
    getKhodams,
    getKhodam,
    getRandomKhodam,
    getHashKhodam,
    postKhodam,
    deleteKhodam,
    patchKhodam
}