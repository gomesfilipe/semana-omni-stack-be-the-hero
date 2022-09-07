const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
    create(req, res, next) {
        const validationMiddleware = celebrate({
            [Segments.BODY]: Joi.object().keys({
                id: Joi.string().required()
            })
        })

        validationMiddleware(req, res, next)
    }
}
