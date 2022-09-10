import * as cartaoRepository from "../repositories/cartaoRepository"
import { ICardData } from "../types/cartaoTypes"

export async function checaTituloNota(userId: number, tituloCartao: string) {
    const nota = await cartaoRepository.buscaPeloTitulo(userId, tituloCartao)
    console.log(nota)
    if (nota.length > 0) {
        throw { code: "unauthorized", message: "Usuário não pode ter mais de um cartão com o mesmo título" }
    }
}

export async function criaCartao(dadosCartao: ICardData) {
    await cartaoRepository.insereCartao(dadosCartao)
}