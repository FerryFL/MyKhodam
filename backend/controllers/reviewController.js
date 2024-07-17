// Installation and configuration
const mongoose = require('mongoose')

// Import model
const Review = require('../models/reviewModel')

// Get all reviews
const getReviews = async(req,res) => {
    try {
        const reviews = await Review.find({}).sort({createdAt: -1})
        return res.status(200).json(reviews)
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

// Get one review
const getReview = async(req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Review Not Found"})
    }

    try{
        const review = await Review.findById(id)

        if(!review){
            return res.status(404).json({error: "Review Not Found"})
        }
        
        return res.status(200).json(review)
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

// Create one review
const postReview = async(req,res) => {
    const { name,review } = req.body

    try{
        const createReview = await Review.create({name,review})
        res.status(200).json(createReview)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

// Update one review
const patchReview = async(req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Review Not Found"})
    }

    try{
        const review = await Review.findOneAndUpdate(
            {_id:id},
            {...req.body},
            {new: true}
        )
    
        if(!review){
            return res.status(404).json({error: "Review Not Found"})
        }
    
        return res.status(200).json(review)
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

// Delete one review
const deleteReview = async(req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Review Not Found"})
    }
    
    try{
        const review = await Review.findOneAndDelete(
            {_id:id}
        )

        if(!review){
            return res.status(404).json({error: "Review Not Found"})
        }
    
        return res.status(200).json(review)
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    getReviews,
    getReview,
    postReview,
    patchReview,
    deleteReview
}