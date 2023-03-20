const express = require('express');
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
// Mongo DB connection

require('./config/db')

// rest obj
const app = express();


// midleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use('/api/v1/teacher', require('./routes/teacherRoutes'))
app.use('/api/v1/student', require('./routes/studentRoutes'))
app.use('/api/v1/admin', require('./routes/adminRoutes'))

//listening

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server Running at ${port}`.bgYellow.red)
})