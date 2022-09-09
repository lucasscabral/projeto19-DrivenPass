import dotenv from "dotenv"
dotenv.config()
import jwt from 'jsonwebtoken';
import { buscaPorEmail, insereUsuario } from "../repositories/autenticacaoRepository";
import bcrypt, { compareSync } from "bcrypt"
import { IUsuario, Login } from "../utils/interfaceUtils";

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
    if (!emailEncontrado.email) {
        throw { code: "unauthorized", message: "Email ou senha inválido" }
    }
    console.log(emailEncontrado)
    return emailEncontrado
}

export async function verificaSenha(senhaPassada: string, senhaEcriptografada: string) {
    const comparaSenha = compareSync(senhaPassada, senhaEcriptografada)
    if (!comparaSenha) {
        throw { code: "unauthorized", message: "Email ou senha inválido" }
    }
    return comparaSenha
}

export async function geraToken(dados: Login) {
    const SECRETJWT: string | any = (process.env.JWT_SECRET)?.toString()
    const token = jwt.sign(dados, SECRETJWT, {
        expiresIn: 60 * 60 * 24,
    });

    return token
}