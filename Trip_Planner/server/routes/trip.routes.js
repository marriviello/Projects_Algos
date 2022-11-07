const TripController = require("../controllers/trip.controller")
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.get("/api/trips", authenticate, TripController.getTrip)
    app.get("/api/trip/:_id", authenticate, TripController.getTripID)
    app.post("/api/trip/create", authenticate, TripController.createTrip)
    app.put("/api/trip/edit/:_id", authenticate, TripController.updateTrip)
    app.delete("/api/trip/delete/:_id", authenticate, TripController.deleteTrip)
}