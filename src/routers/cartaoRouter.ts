import { Router } from "express";
import * as cartaoController from "../controllers/cartaoController"
import validaCorpoCartao from "../schemas/cartaoSchemas";
import { validarToken } from "../utils/utilsMiddlewers";
import validateSchema from "../utils/validateSchema";


const cartaoRouter = Router()

cartaoRouter.post("/cartao", validateSchema(validaCorpoCartao), validarToken, cartaoController.criaCartao)

export default cartaoRouter