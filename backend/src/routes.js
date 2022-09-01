const express = require('express')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')

const connection = require('./database/connection')
const router = express.Router()

router.get('/ongs', OngController.index)
router.post('/ongs', OngController.create)

router.get('/incidents', IncidentController.index)
router.post('/incidents', IncidentController.create)

module.exports = router
