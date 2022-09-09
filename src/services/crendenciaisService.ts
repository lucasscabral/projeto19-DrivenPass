import * as credenciaisRepository from "../repositories/credenciaisRepository";
import { ICredenciais, ICredenciaisData } from "../types/credenciaisTypes";
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

    const credencialDescriptografada = credenciais.map((value) => {
        let dados = { ...value, password_credential: cryptr.decrypt(value.password_credential) }
        return dados
    })
    return credencialDescriptografada
}

export async function checaCredencialId(userId: number, credencialId: number) {
    const credencial = await credenciaisRepository.buscaCredencialId(credencialId)
    if (credencial?.userId !== userId || !credencial) {
        throw { code: "forbidden", message: "Essa credencial não pertence a esse usuário ou a credencial não existe" }
    }
    return credencial
}

export async function descriptografaSenhaCredencial(credencial: ICredenciais) {
    const cryptr = new Cryptr('myTotallySecretKey');
    const credencialDescriptografada = { ...credencial, password_credential: cryptr.decrypt(credencial.password_credential) }
    return credencialDescriptografada
}


export async function deletaCredencialId(credencialId: number) {
    await credenciaisRepository.deletaCredencialId(credencialId)
}
