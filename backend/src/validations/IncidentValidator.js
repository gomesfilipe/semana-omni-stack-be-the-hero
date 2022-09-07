const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
    get(req, res, next) {
        const validationMiddleware = celebrate({
            [Segments.QUERY]: Joi.object().keys({
                page: Joi.number()
            })
        })

        validationMiddleware(req, res, next)
    },
    
    create(req, res, next) {
        console.log(typeof req.body.value)
        const validationMiddleware = celebrate({
            [Segments.BODY]: Joi.object().keys({
                title: Joi.string().required(),
                description: Joi.string().required(),
                value: Joi.number().required()
            }),

            [Segments.HEADERS]: Joi.object({
                authorization: Joi.string().required()
            }).unknown() 
        })

        validationMiddleware(req, res, next)
    },

    delete(req, res, next) {
        const validationMiddleware = celebrate({
            [Segments.PARAMS]: Joi.object().keys({
                id: Joi.number().required()
            })
        })

        validationMiddleware(req, res, next)
    }
}