import { Router } from "express";
import autenticacaoRouters from "./autenticacaoRouter";

const router = Router()

router.use(autenticacaoRouters)

export default router