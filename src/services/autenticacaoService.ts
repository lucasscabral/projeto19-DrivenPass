import dotenv from "dotenv"
dotenv.config()
import { buscaPorEmail, insereUsuario } from "../repositories/autenticacaoRepository";
import bcrypt, { compareSync } from "bcrypt"
import { IUsuario } from "../utils/interfaceUtils";

export async function verificaEmailCadastro(email: string) {
    const emailEncontrado = await buscaPorEmail(email)
    if (emailEncontrado) {
        throw { code: "unauthorized", message: "Esse email já existe" }
    }
}

export async function ecriptografarSenha(senha: string) {
    const SECRET = Number(process.env.BCRYPT_SECRET)
    const ecriptaSenha = bcrypt.hashSync(senha, SECRET)

    return ecriptaSenha
}

export async function criarUsuario(data: IUsuario) {
    await insereUsuario(data)
}

export async function verificaEmailLogin(email: string) {
    const emailEncontrado = await buscaPorEmail(email)
    if (emailEncontrado) {
        throw { code: "unauthorized", message: "Email ou senha inválido" }
    }
    return emailEncontrado
}

export async function verificaSenha(senhaPassada: string, senhaEcriptografada: IUsuario) {
    const comparaSenha = compareSync(senhaPassada, senhaEcriptografada.password)

}