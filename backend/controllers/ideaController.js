// Installation and configuration
const mongoose = require('mongoose')

// Import model
const Idea = require('../models/ideaModel')

// Get all ideas
const getIdeas = async(req,res)=> {
    try{
        const ideas = await Idea.find({}).sort({createdAt: -1})
        return res.status(200).json(ideas)
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

// Get one idea
const getIdea = async(req,res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Idea Not Found"})
    }
    
    try{
        const idea = await Idea.findById(id)

        if(!idea){
            return res.status(404).json({error: "Idea Not Found"})
        }

        return res.status(200).json(idea)
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

// Create one idea
const postIdea = async(req,res)=>{
    const {contributor, idea} = req.body

    try{
        const newIdea = await Idea.create({contributor,idea})
        return res.status(200).json(newIdea)
    }catch(error){
        return res.status(400).json({error: error.message})
    }
}

// Update one idea 
const patchIdea = async(req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Idea Not Found"})
    }

    try{
        const updateIdea = await Idea.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            { new: true }
        )
    
        if(!updateIdea){
            return res.status(404).json({error: "Idea Not Found"})
        }
    
        return res.status(200).json(updateIdea)
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

// Delete one idea
const deleteIdea = async(req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Idea Not Found"})
    }

    try{
        const deleteIdea = await Idea.findOneAndDelete(
            { _id:id }
        )
        return res.status(200).json(deleteIdea)
    }catch(error){
        return res.status(500).json({error:error.message})
    }
}

module.exports = {
    getIdeas,
    getIdea,
    postIdea,
    patchIdea,
    deleteIdea
}