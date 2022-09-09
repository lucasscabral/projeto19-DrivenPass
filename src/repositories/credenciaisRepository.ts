import prisma from "../database/prismaClient";
import { ICredenciaisData } from "../types/credenciaisTypes";

export async function buscarPorTitulo(titulo: string) {
    const tituloEncontrado = await prisma.credentials.findUnique({
        where: {
            titulo
        }
    })
    console.log(tituloEncontrado)
    return tituloEncontrado
}

export async function insereCrendial(credencial: ICredenciaisData) {
    await prisma.credentials.create({ data: credencial })
}

export async function buscaTodasCredenciais() {
    return prisma.credentials.findMany()
}

export async function buscaCredencialId(credencialId: number) {
    return await prisma.credentials.findUnique({ where: { id: credencialId } })
}