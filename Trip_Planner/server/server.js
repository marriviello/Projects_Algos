const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser')

app.use(cors({
    origin: 'http://localhost:3000', credentials:true
}),
)

app.use(cookieParser())
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
require('./config/mongoose.config')

//import routes
require('./routes/trip.routes')(app)
require('./routes/user.routes')(app)

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
