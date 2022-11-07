const UserController = require("../controllers/user.controller")
const bcrypt = require('bcrypt')

module.exports = (app) => {
    app.post('/api/register', UserController.registerUser),
    app.post('/api/login', UserController.loginUser)
    app.get('/api/logout', UserController.logOutUser)
}