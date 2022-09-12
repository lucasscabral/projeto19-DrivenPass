import * as notasSegurasRepository from "../repositories/notasSegurasRepository"
import { ISecureData } from "../types/notasSegurasTypes"


export async function checaTituloNota(userId: number, titulo: string) {
    const nota = await notasSegurasRepository.buscaPeloTitulo(userId, titulo)
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

export async function buscaNotaId(userId: number, notaId: number) {
    const nota = await notasSegurasRepository.buscaNota(notaId)
    if (nota?.userId !== userId || !nota) {
        throw { code: "forbidden", message: "Essa nota não pertence a esse usuário ou a nota não existe" }
    }
    return nota
}

export async function deletaNota(notaId: number) {
    await notasSegurasRepository.deletarNota(notaId)
}