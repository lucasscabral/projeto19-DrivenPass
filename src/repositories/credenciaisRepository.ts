import prisma from "../database/prismaClient";
import { ICredenciaisData } from "../types/credenciaisTypes";

export async function buscarPorTitulo(userId: number, titulo: string) {
    const tituloEncontrado = await prisma.credentials.findMany({
        where: {
            titulo,
            AND: {
                userId
            }
        }
    })
    return tituloEncontrado
}

export async function insereCrendial(credencial: ICredenciaisData) {
    await prisma.credentials.create({ data: credencial })
}

export async function buscaTodasCredenciais(userId: number) {
    return prisma.credentials.findMany({ where: { userId } })
}

export async function buscaCredencialId(credencialId: number) {
    return await prisma.credentials.findUnique({ where: { id: credencialId } })
}

export async function deletaCredencialId(credencialId: number) {
    await prisma.credentials.delete({ where: { id: credencialId } })
}