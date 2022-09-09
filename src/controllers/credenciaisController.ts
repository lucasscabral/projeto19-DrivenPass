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

export async function todasCredenciais(req: Request, res: Response) {
    const credenciais = await credenciaisService.pegaCredenciais()
    res.status(200).send(credenciais)
}

// export async function credencialPeloId(req: Request, res: Response) {
//     const { id } = res.locals.corpoToken



// }