const mongoose = require('mongoose')
const Idea = require('../models/ideaModel')

const getIdeas = async(req,res)=> {
    const ideas = await Idea.find({}).sort({createdAt: -1})
    res.status(200).json(ideas)
}

const getIdea = async(req,res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Idea Not Found"})
    }

    const idea = await Idea.findById(id)

    if(!idea){
        return res.status(404).json({error: "Idea Not Found"})
    }
    res.status(200).json(idea)
}

const createIdea = async(req,res)=>{
    const {contributor, idea} = req.body

    try{
        const ide = await Idea.create({contributor,idea})
        res.status(200).json(ide)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const patchIdea = async(req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Idea Not Found"})
    }

    const idea = await Idea.findOneAndUpdate({_id:id}, {
        ...req.body
    })

    if(!idea){
        return res.status(404).json({error: "Idea Not Found"})
    }

    res.status(200).json(idea)
}

const deleteIdea = async(req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Idea Not Found"})
    }

    const idea = await Idea.findOneAndDelete({_id:id})

    res.status(200).json(idea)
}

module.exports = {
    getIdeas,
    getIdea,
    createIdea,
    patchIdea,
    deleteIdea
}