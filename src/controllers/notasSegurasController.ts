import { Request, Response } from "express";


export async function criaNota(req: Request, res: Response) {
    const { id } = res.locals.corpoToken
    const { tituloNota, anotacoes } = req.body



}