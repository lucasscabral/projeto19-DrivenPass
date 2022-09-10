import { Router } from "express";
import * as notasSegurasController from "../controllers/notasSegurasController"
import validaCorpoNotas from "../schemas/notasSegurasSchemas";
import { validarToken } from "../utils/utilsMiddlewers";
import validateSchema from "../utils/validateSchema";


const notasRouter = Router()

notasRouter.post("/notas", validateSchema(validaCorpoNotas), validarToken, notasSegurasController.criaNota)
notasRouter.get("/notas", validarToken, notasSegurasController.listaNotas)
notasRouter.get("/notas/:notaId", validarToken, notasSegurasController.listaNotaPeloId)
notasRouter.delete("/notas", validarToken, notasSegurasController.listaNotas)


export default notasRouter