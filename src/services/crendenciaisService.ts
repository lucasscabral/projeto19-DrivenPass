import * as credenciaisRepository from "../repositories/credenciaisRepository";
import { ICredenciaisData } from "../types/credenciaisTypes";
import Cryptr from "cryptr";


export async function checaTitulo(id: number, titulo: string) {
    const tituloEncontrado = await credenciaisRepository.buscarPorTitulo(titulo)
    console.log(tituloEncontrado)
    if (tituloEncontrado?.userId === id) {
        throw { code: "unauthorized", message: "Usuário não pode ter mais de uma credencial com o mesmo título" }
    }
}

export async function criptografaSenha(senha: string) {
    const cryptr = new Cryptr('myTotallySecretKey');
    const senhaCriptografada = cryptr.encrypt(senha)
    console.log(senhaCriptografada)
    return senhaCriptografada
}

export async function criaCredencial(credencial: ICredenciaisData) {
    console.log(credencial)
    await credenciaisRepository.insereCrendial(credencial)
}

export async function pegaCredenciais() {
    const cryptr = new Cryptr('myTotallySecretKey');
    const credenciais = await credenciaisRepository.buscaTodasCredenciais()

    const credenciaisDescripty = credenciais.map((value) => {
        let dados = { ...value, password_credential: cryptr.decrypt(value.password_credential) }
        return dados
    })
    return credenciaisDescripty
}