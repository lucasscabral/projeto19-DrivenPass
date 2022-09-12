import prisma from "../database/prismaClient"
import { ICardData } from "../types/cartaoTypes"


export async function buscaPeloTitulo(userId: number, tituloCartao: string) {
    return await prisma.cards.findMany({
        where: {
            titleCard: tituloCartao,
            AND: {
                userId
            }
        }
    })
}

export async function insereCartao(dadosCartao: ICardData) {
    await prisma.cards.create({ data: dadosCartao })
}

export async function buscarTodosCartoes(userId: number) {
    return await prisma.cards.findMany({ where: { userId } })
}

export async function buscaCartao(cartaoId: number) {
    return await prisma.cards.findUnique({ where: { id: cartaoId } })
}

export async function deletarCartao(cartaoId: number) {
    await prisma.cards.delete({ where: { id: cartaoId } })
}