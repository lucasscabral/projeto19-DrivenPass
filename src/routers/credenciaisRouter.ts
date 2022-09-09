import { Router } from "express";
import { validarCredencial } from "../middlewers/credenciaisMiddlewers";
import validateSchema from "../utils/validateSchema";
import validaCredencial from "../schemas/credenciaisSchema";

const credenciaisRouter = Router()

credenciaisRouter.post("/credenciais", validateSchema(validaCredencial), validarCredencial)


export default credenciaisRouter