import Joi from "joi";


const validaCorpoCartao = Joi.object({
    tituloNota: Joi.string().required(),
    numero: Joi.string().length(16).required(),
    nomeImpresso: Joi.string().required(),
    cvc: Joi.string().length(3).required(),
    dataExp: Joi.string().required(),
    senha: Joi.string().length(4).required(),
    eVirtual: Joi.boolean(),
    tipo: Joi.string().valid("credito", "debito", "ambos").required(),
})

export default validaCorpoCartao