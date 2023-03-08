const express = require('express');
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv')
dotenv.config()
// Mongo DB connection

require('./config/db.js')

// rest obj
const app = express();


// midleware
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use('/api/v1/user', require('./routes/userRoutes'))
//listening

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server Running at ${port}`.bgYellow.red)
})