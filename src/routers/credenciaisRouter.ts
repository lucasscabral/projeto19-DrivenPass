import { Router } from "express";
import { validarCredencial } from "../middlewers/credenciaisMiddlewers";
import validateSchema from "../utils/validateSchema";
import validaCorpoCredencial from "../schemas/credenciaisSchema";
import * as credenciaisController from "../controllers/credenciaisController"

const credenciaisRouter = Router()

credenciaisRouter.post("/credenciais", validateSchema(validaCorpoCredencial), validarCredencial, credenciaisController.criaCredencial)
credenciaisRouter.get("/credenciais", credenciaisController.todasCredenciais)
credenciaisRouter.get("/credenciais/:credencialId", validarCredencial, credenciaisController.credencialPeloId)
credenciaisRouter.delete("/credenciais/:credencialId", validarCredencial, credenciaisController.deletaCredencial)

export default credenciaisRouter