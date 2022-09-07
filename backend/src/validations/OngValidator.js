const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
    create(req, res, next) {
        const validationMiddleware = celebrate({
            [Segments.BODY]: Joi.object().keys({
                name: Joi.string().required(),
                email: Joi.string().required().email(),
                whatsapp: Joi.string().regex(/^[0-9]{10,11}$/).required(),
                city: Joi.string().required(),
                uf: Joi.string().required().length(2)
            })
        })

        validationMiddleware(req, res, next)
    }
}
