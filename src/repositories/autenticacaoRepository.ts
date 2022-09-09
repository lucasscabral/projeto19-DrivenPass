import connection from "../database/prismaClient";
import { IUsuario } from "../utils/interfaceUtils";

export async function buscaPorEmail(email: string) {
    const emailEncontrado = await connection.users.findMany({ where: { email } })
    return emailEncontrado[0]
}

export async function insereUsuario(dadosCadastrais: IUsuario) {
    await connection.users.create({ data: { email: dadosCadastrais.email, password: dadosCadastrais.password } })
}