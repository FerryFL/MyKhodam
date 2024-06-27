//call model
const Khodam = require('../models/khodamModel')

const mongoose = require('mongoose')

const getKhodams = async (req,res)=>{
    const khodams = await Khodam.find({}).sort({createdAt: -1})

    res.status(200).json(khodams)
}

const getKhodam = async (req,res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json('Khodam Not Found')
    }

    const khodam = await Khodam.findById(id)

    if(!khodam){
        return res.status(404).json({error: "Khodam Not Found"})
    }
    
    res.status(200).json(khodam)
}

const getRandomKhodam = async (req,res) => {
    const random = await Khodam.aggregate([{$sample: {size:1}}])
    res.status(200).json(random)
}

const createKhodam = async (req,res)=>{
    const {name} = req.body
    
    try{
        const khodam = await Khodam.create({name})
        res.status(200).json(khodam)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const deleteKhodam = async (req,res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Khodam Not Found'})
    }

    const khodam = await Khodam.findOneAndDelete({_id:id})

    if(!khodam){
        return res.status(404).json({error: 'Khodam Not Found'})
    }

    res.status(200).json(khodam)
}

const patchKhodam = async (req,res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Khodam Not Found'})
    }

    const khodam = await Khodam.findOneAndUpdate({_id:id}, {
        ...req.body
    })

    if(!khodam){
        return res.status(404).json({error: 'Khodam Not Found'})
    }

    res.status(200).json(khodam)
}

//wrap all methods, then export em
module.exports = {
    getKhodams,
    getKhodam,
    getRandomKhodam,
    createKhodam,
    deleteKhodam,
    patchKhodam
}