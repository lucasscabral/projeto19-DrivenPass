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