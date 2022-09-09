import { Router } from "express";
import autenticacaoRouters from "./autenticacaoRouter";
import credenciaisRouter from "./credenciaisRouter";

const router = Router()

router.use(autenticacaoRouters)
router.use(credenciaisRouter)

export default router