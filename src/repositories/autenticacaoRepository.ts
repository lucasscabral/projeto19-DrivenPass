import connection from "../database/prismaClient";
import { IUsuario } from "../utils/interfaceUtils";

export async function buscaPorEmail(email: string) {
    const emailEncontrado = await connection.users.findUnique({ where: { email } })
    return emailEncontrado
}

export async function insereUsuario(dadosCadastrais: IUsuario) {
    await connection.users.create({ data: { email: dadosCadastrais.email, password: dadosCadastrais.password } })
}