import { Router } from "express";
import autenticacaoRouters from "./autenticacaoRouter";
import cartaoRouter from "./cartaoRouter";
import credenciaisRouter from "./credenciaisRouter";
import notasRouter from "./notasSegurasRouter";

const router = Router()

router.use(autenticacaoRouters)
router.use(credenciaisRouter)
router.use(notasRouter)
router.use(cartaoRouter)

export default router