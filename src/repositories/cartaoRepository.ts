import prisma from "../database/prismaClient"
import { ICardData, ICards } from "../types/cartaoTypes"


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