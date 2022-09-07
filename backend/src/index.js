const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const router = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)
app.use(errors())

const port = 3333
app.listen(port)
console.log(`http://localhost:${port}`)
