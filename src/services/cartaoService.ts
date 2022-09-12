import * as cartaoRepository from "../repositories/cartaoRepository"
import { ICardData } from "../types/cartaoTypes"

export async function checaTituloCartao(userId: number, tituloCartao: string) {
    const cartao = await cartaoRepository.buscaPeloTitulo(userId, tituloCartao)

    if (cartao.length > 0) {
        throw { code: "unauthorized", message: "Usuário não pode ter mais de um cartão com o mesmo título" }
    }
}

export async function criaCartao(dadosCartao: ICardData) {
    await cartaoRepository.insereCartao(dadosCartao)
}

export async function todosCartoes(userId: number) {
    return await cartaoRepository.buscarTodosCartoes(userId)
}

export async function buscaCartaoId(userId: number, cartaoId: number) {
    const cartao = await cartaoRepository.buscaCartao(cartaoId)
    if (cartao?.userId !== userId || !cartao) {
        throw { code: "forbidden", message: "Esse cartao não pertence a esse usuário ou a cartao não existe" }
    }
    return cartao
}

export async function deletaCartao(cartaoId: number) {
    await cartaoRepository.deletarCartao(cartaoId)
}