const mongoose = require('mongoose')

const TripSchema = new mongoose.Schema({
    name: { 
        type: String,
        required:[true,"Trip name is required"], 
        minlength: [3, "Must be at least 3 characters"],
    },
    city: { 
        type: String,
        required:[true,"City name is required"], 
        minlength: [3, "Must be at least 3 characters"],
    },
    country: { 
        type: String,
        required:[true,"Country name is required"], 
        minlength: [3, "Must be at least 3 characters"],
    },
    travelInfo: { 
        type: String,
        enum: ['Airplane', 'Bus', 'Train', 'Car'],
        required:[true,"Travel info is required"],
    },
    travelConfirmation: { 
        type: String,
    },
    hotel: { 
        type: String,
        enum: ['Hotel', 'Airbnb', 'Hostel'],
        required:[true,"Travel info is required"],
    },
    hotelConfirmation: {
        type: String
    },
    arrival: {         
        type: Date,
        required:[true,"Arrival date is required"]
    },
    departure: {         
        type: Date,
        required:[true,"Departure date is required"]
    }
}, { timestamps: true });


module.exports = mongoose.model('Trip', TripSchema);
