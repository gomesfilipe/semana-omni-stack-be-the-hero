const express = require('express')

const OngValidator = require('./validations/OngValidator')
const ProfileValidator = require('./validations/ProfileValidator')
const IncidentValidator = require('./validations/IncidentValidator')
const SessionValidator = require('./validations/SessionValidator')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const router = express.Router()

router.post('/sessions', SessionValidator.create, SessionController.create)

router.get('/ongs', OngController.index)
router.post('/ongs', OngValidator.create, OngController.create)

router.get('/profile', ProfileValidator.get, ProfileController.index)

router.get('/incidents',  IncidentValidator.get, IncidentController.index)
router.post('/incidents',  IncidentValidator.create, IncidentController.create)
router.delete('/incidents/:id', IncidentValidator.delete, IncidentController.delete)

module.exports = router
