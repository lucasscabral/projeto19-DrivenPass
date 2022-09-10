import * as notasSegurasRepository from "../repositories/notasSegurasRepository"
import { ISecureData } from "../types/notasSegurasTypes"


export async function checaTituloNota(userId: number, titulo: string) {
    const nota = await notasSegurasRepository.buscaPeloTitulo(userId, titulo)
    console.log(nota)
    if (nota.length > 0) {
        throw { code: "unauthorized", message: "Usuário não pode ter mais de uma nota com o mesmo título" }
    }
}

export async function criaNota(notaData: ISecureData) {
    await notasSegurasRepository.insereNota(notaData)
}

export async function todasNotas(userId: number) {
    return await notasSegurasRepository.buscarTodasNotas(userId)
}