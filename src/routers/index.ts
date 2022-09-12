import { Router } from "express";
import autenticacaoRouters from "./autenticacaoRouter";
import cartaoRouter from "./cartaoRouter";
import credenciaisRouter from "./credenciaisRouter";
import notasRouter from "./notasSegurasRouter";
import wifiRouter from "./wifiRouter";

const router = Router()

router.use(autenticacaoRouters)
router.use(credenciaisRouter)
router.use(notasRouter)
router.use(cartaoRouter)
router.use(wifiRouter)

export default router