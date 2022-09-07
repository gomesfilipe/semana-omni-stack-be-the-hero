const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
    get(req, res, next) {
        const validationMiddleware = celebrate({
            [Segments.HEADERS]: Joi.object({
                authorization: Joi.string().required()
            }).unknown()
        })

        validationMiddleware(req, res, next)
    }
}
