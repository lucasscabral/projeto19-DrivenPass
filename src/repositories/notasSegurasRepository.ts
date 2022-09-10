import prisma from "../database/prismaClient";
import { ISecureData } from "../types/notasSegurasTypes";

export async function buscaPeloTitulo(userId: number, tituloNota: string) {
    return await prisma.secure_notes.findMany({
        where: {
            noteTitle: tituloNota,
            AND: {
                userId
            }
        }
    })
}

export async function insereNota(notaData: ISecureData) {
    await prisma.secure_notes.create({ data: notaData })
}

export async function buscarTodasNotas(userId: number) {
    return await prisma.secure_notes.findMany({ where: { userId } })
}

export async function buscaNota(notaId: number) {
    return await prisma.secure_notes.findUnique({ where: { id: notaId } })
}