import { Request, Response } from "express";
import * as notasSegurasService from "../services/notasSegurasService"

export async function criaNota(req: Request, res: Response) {
    const { id: userId } = res.locals.corpoToken
    const { tituloNota, anotacoes } = req.body

    await notasSegurasService.checaTituloNota(userId, tituloNota)

    const dados = { noteTitle: tituloNota, notes: anotacoes, userId }
    await notasSegurasService.criaNota(dados)
    res.sendStatus(201)

}

export async function listaNotas(req: Request, res: Response) {
    const { id: userId } = res.locals.corpoToken

    const notasSeguras = await notasSegurasService.todasNotas(userId)
    res.status(200).send(notasSeguras)
}