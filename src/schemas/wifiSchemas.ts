import Joi from "joi";

const validaCorpoWifi = Joi.object({
    wifiTitle: Joi.string().required(),
    wifiName: Joi.string().required(),
    password: Joi.string().required()
})

export default validaCorpoWifi