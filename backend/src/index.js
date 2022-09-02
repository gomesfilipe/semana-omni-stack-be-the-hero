const express = require('express')
const cors = requite('cors')
const router = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

const port = 3333
app.listen(port)
console.log(`http://localhost:${port}`)
