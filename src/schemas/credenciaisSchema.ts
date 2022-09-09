import Joi from "joi";

const validaCredencial = Joi.object({
    titulo: Joi.string().required(),
    url: Joi.string().uri().required(),
    nome: Joi.string().required(),
    sennha: Joi.string().min(5).required()
})

export default validaCredencial

