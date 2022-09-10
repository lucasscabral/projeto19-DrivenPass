import { Request, Response } from "express";
import * as cartaoService from "../services/cartaoService"

export async function criaCartao(req: Request, res: Response) {
    const { id: userId } = res.locals.corpoToken
    const { tituloNota, numero, nomeImpresso, cvc, dataExp, senha, eVirtual, tipo } = req.body

    await cartaoService.checaTituloNota(userId, tituloNota)

    const dados = { titleCard: tituloNota, numberCard: numero, printedName: nomeImpresso, cvc, expirationDate: dataExp, password: senha, isVirtual: eVirtual, type: tipo, userId }

    await cartaoService.criaCartao(dados)
    res.sendStatus(201)
}

export async function listaCartoes(_: Request, res: Response) {
    const { id: userId } = res.locals.corpoToken

    const cartoes = await cartaoService.todosCartoes(userId)
    res.status(200).send(cartoes)
}


export async function listaCartaoPeloId(req: Request, res: Response) {
    const { id: userId } = res.locals.corpoToken
    const cartaoId = Number(req.params.cartaoId)

    const cartao = await cartaoService.buscaCartaoId(userId, cartaoId)

    res.status(200).send(cartao)
}
export async function deletaCartao(req: Request, res: Response) {
    const { id: userId } = res.locals.corpoToken
    const cartaoId = Number(req.params.cartaoId)

    await cartaoService.buscaCartaoId(userId, cartaoId)

    await cartaoService.deletaCartao(cartaoId)
    res.sendStatus(200)
}