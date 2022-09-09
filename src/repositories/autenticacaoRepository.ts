import prisma from "../database/prismaClient";
import { IUsuario } from "../utils/interfaceUtils";

export async function buscaPorEmail(email: string) {
    const emailEncontrado = await prisma.users.findMany({ where: { email } })
    return emailEncontrado[0]
}

export async function insereUsuario(dadosCadastrais: IUsuario) {
    await prisma.users.create({ data: { email: dadosCadastrais.email, password: dadosCadastrais.password } })
}