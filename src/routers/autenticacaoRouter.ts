import { Router } from "express";
import * as autenticacaoController from "../controllers/autenticacaoController"
import validaAutenticacao from "../schemas/autenticacaoSchemas";
import validateSchema from "../utils/validateSchema";

const autenticacaoRouters = Router()

autenticacaoRouters.post("/signup", validateSchema(validaAutenticacao), autenticacaoController.cadastrar)
autenticacaoRouters.post("/signin", validateSchema(validaAutenticacao))

export default autenticacaoRouters