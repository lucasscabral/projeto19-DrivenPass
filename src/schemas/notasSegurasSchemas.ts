import Joi from "joi";

const validaCorpoNotas = Joi.object({
    tituloNota: Joi.string().max(50).required(),
    anotacoes: Joi.string().max(100).required()
})

export default validaCorpoNotas