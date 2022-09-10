import { Router } from "express";
import { validarToken } from "../utils/utilsMiddlewers";
import validateSchema from "../utils/validateSchema";
import validaCorpoCredencial from "../schemas/credenciaisSchemas";
import * as credenciaisController from "../controllers/credenciaisController"

const credenciaisRouter = Router()

credenciaisRouter.post("/credenciais", validateSchema(validaCorpoCredencial), validarToken, credenciaisController.criaCredencial)
credenciaisRouter.get("/credenciais", validarToken, credenciaisController.todasCredenciais)
credenciaisRouter.get("/credenciais/:credencialId", validarToken, credenciaisController.credencialPeloId)
credenciaisRouter.delete("/credenciais/:credencialId", validarToken, credenciaisController.deletaCredencial)

export default credenciaisRouter