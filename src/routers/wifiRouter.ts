import { Router } from "express";
import * as wifiController from "../controllers/wifiController"
import validaCorpoWifi from "../schemas/wifiSchemas";
import { validarToken } from "../utils/utilsMiddlewers";
import validateSchema from "../utils/validateSchema";

const wifiRouter = Router()

wifiRouter.post("/wifi", validateSchema(validaCorpoWifi), validarToken, wifiController.criaWifi)
wifiRouter.get("/wifi", validarToken, wifiController.listaWifis)
wifiRouter.get("/wifi/:wifiId", validarToken, wifiController.listaWifiPeloId)
wifiRouter.delete("/wifi/:wifiId", validarToken, wifiController.deletaWifi)

export default wifiRouter