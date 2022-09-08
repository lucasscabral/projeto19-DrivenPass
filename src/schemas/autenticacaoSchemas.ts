import Joi from "joi";

// const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i

const validaAutenticacao = Joi.object({
    email: Joi.string().pattern(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i).required(),
    password: Joi.string().min(10).required()
})

export default validaAutenticacao