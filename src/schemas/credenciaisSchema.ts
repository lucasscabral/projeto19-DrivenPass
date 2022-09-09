import Joi from "joi";

const validaCorpoCredencial = Joi.object({
    titulo: Joi.string().required(),
    url: Joi.string().uri().required(),
    nome: Joi.string().required(),
    senha: Joi.string().min(5).required()
})

export default validaCorpoCredencial

