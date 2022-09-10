import { Router } from "express";
import validaCorpoNotas from "../schemas/notasSegurasSchemas";
import { validarToken } from "../utils/utilsMiddlewers";
import validateSchema from "../utils/validateSchema";


const notasRouter = Router()

notasRouter.post("/notas", validateSchema(validaCorpoNotas), validarToken)


export default notasRouter