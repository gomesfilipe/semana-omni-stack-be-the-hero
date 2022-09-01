const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World' })
})

const port = 3333
app.listen(port)
console.log(`http://localhost:${port}`)