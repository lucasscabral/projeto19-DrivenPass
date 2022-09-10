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

export async function listaNotas(_: Request, res: Response) {
    const { id: userId } = res.locals.corpoToken

    const notasSeguras = await notasSegurasService.todasNotas(userId)
    res.status(200).send(notasSeguras)
}

export async function listaNotaPeloId(req: Request, res: Response) {
    const { id: userId } = res.locals.corpoToken
    const notaId = Number(req.params.notaId)

    const notaSegura = await notasSegurasService.buscaNotaId(userId, notaId)

    res.status(200).send(notaSegura)
}
export async function deletaNota(req: Request, res: Response) {
    const { id: userId } = res.locals.corpoToken
    const notaId = Number(req.params.notaId)

    await notasSegurasService.buscaNotaId(userId, notaId)

    await notasSegurasService.deletaNota(notaId)
    res.sendStatus(200)
}