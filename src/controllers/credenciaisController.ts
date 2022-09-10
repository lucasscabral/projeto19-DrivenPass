import { Request, Response } from "express";
import * as credenciaisService from "../services/crendenciaisService"


export async function criaCredencial(req: Request, res: Response) {
    const { id } = res.locals.corpoToken
    const { titulo, url, nome, senha } = req.body

    await credenciaisService.checaTitulo(id, titulo)

    const senhaCriptografada = await credenciaisService.criptografaSenha(senha)

    await credenciaisService.criaCredencial({ titulo, url, name: nome, password_credential: senhaCriptografada, userId: id })

    res.sendStatus(201)
}
// try {
// } catch (error) {
//     console.log(error)
//     res.sendStatus(500)
// }

export async function todasCredenciais(_: Request, res: Response) {
    const { id: userId } = res.locals.corpoToken

    const credenciais = await credenciaisService.pegaCredenciais(userId)
    res.status(200).send(credenciais)


}

export async function credencialPeloId(req: Request, res: Response) {
    const credencialId = Number(req.params.credencialId)

    const { id: userId } = res.locals.corpoToken

    const pegaCredencialId = await credenciaisService.checaCredencialId(userId, credencialId)

    const credencial = await credenciaisService.descriptografaSenhaCredencial(pegaCredencialId)

    res.status(200).send(credencial)
}
export async function deletaCredencial(req: Request, res: Response) {
    const credencialId = Number(req.params.credencialId)

    const { id: userId } = res.locals.corpoToken

    await credenciaisService.checaCredencialId(userId, credencialId)

    await credenciaisService.deletaCredencialId(credencialId)
    res.sendStatus(200)
}