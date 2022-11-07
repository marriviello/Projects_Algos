const Trip = require("../models/trip.model")

const getTrip = (req, res) => {
    Trip.find()
        .then((user) => res.json(user))
        .catch((err)=>{
            res.status(400).json(err)
        })
}

const getTripID = (req,res) => {
    Trip.findById(req.params._id)
        .then((user) => res.json(user))
        .catch((err)=>{
            res.status(400).json(err)
        })
}

const createTrip = (req, res) => {
    Trip.create(req.body)
        .then((newTrip) => res.json(newTrip))
        .catch((err)=>{
            res.status(400).json(err)
        })
}

const updateTrip = (req, res) => {
    Trip.updateOne({_id:req.params._id}, req.body)
        .then((user) => res.json(user))
        .catch((err)=>{
            res.status(400).json(err)
        })
}

const deleteTrip = (req, res) => {
    Trip.remove({_id: req.params._id})
        .then((user) => res.json(user))
        .catch((err)=>{
            res.status(400).json(err)
        })
}

module.exports = {
    getTrip,
    getTripID,
    createTrip,
    updateTrip,
    deleteTrip
}

