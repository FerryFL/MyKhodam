const mongoose = require('mongoose')

const Review = require('../models/reviewModel')

const getReviews = async(req,res) => {
    const reviews = await Review.find({}).sort({createdAt:-1})
    res.status(200).json(reviews)
}

const getReview = async(req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Review Not Found'})
    }

    const review = await Review.findById(id)

    if(!review){
        return res.status(404).json({error: 'Review Not Found'})
    }
    
    res.status(200).json(review)
}

const postReview = async(req,res) => {
    const {name,review} = req.body

    try{
        const createReview = await Review.create({name,review})
        res.status(200).json(createReview)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const patchReview = async(req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Review Not Found'})
    }

    const review = await Review.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if(!review){
        return res.status(404).json({error: 'Review Not Found'})
    }

    res.status(200).json(review)
}

const deleteReview = async(req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Review Not Found'})
    }
    
    const review = await Review.findOneAndDelete({_id:id})

    if(!review){
        return res.status(404).json({error: 'Review Not Found'})
    }

    res.status(200).json(review)
}

module.exports = {
    getReviews,
    getReview,
    postReview,
    patchReview,
    deleteReview
}