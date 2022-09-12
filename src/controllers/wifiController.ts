import { Request, Response } from "express";
import * as wifiService from "../services/wifiService"

export async function criaWifi(req: Request, res: Response) {
    const { id: userId } = res.locals.corpoToken
    const { wifiTitle, wifiName, password } = req.body

    await wifiService.checaTituloWifi(userId, wifiTitle)

    const senhaCriptografada = await wifiService.criptografaSenha(password)

    const dados = { wifiTitle, wifiName, password: senhaCriptografada, userId }
    await wifiService.criawifi(dados)
    res.sendStatus(201)
}

export async function listaWifis(_: Request, res: Response) {
    const { id: userId } = res.locals.corpoToken

    const wifis = await wifiService.todosWifis(userId)
    res.status(200).send(wifis)
}

export async function listaWifiPeloId(req: Request, res: Response) {
    const { id: userId } = res.locals.corpoToken
    const wifiId = Number(req.params.wifiId)

    const wifi = await wifiService.buscaWifiId(userId, wifiId)

    res.status(200).send(wifi)
}
export async function deletaWifi(req: Request, res: Response) {
    const { id: userId } = res.locals.corpoToken
    const wifiId = Number(req.params.wifiId)

    await wifiService.buscaWifiId(userId, wifiId)

    await wifiService.deletaWifi(wifiId)
    res.sendStatus(200)
}