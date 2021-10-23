const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit');
require('dotenv').config()

const PORT = process.env.PORT || 5001

const app = express()

// Rate Limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100
})
app.use(limiter)
app.set('trust proxy', 1)

// Set Static Folder
app.use(express.static('public'))

// Routes
app.use('/api', require('./routes'))


// Enable cors
app.use(cors())

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))