import { Request, Response } from "express";
import * as autenticacaoService from "../services/autenticacaoService";


export async function cadastrar(req: Request, res: Response) {
    const body = req.body;

    await autenticacaoService.verificaEmailCadastro(body.email)
    const senhaEcriptografada = await autenticacaoService.ecriptografarSenha(body.password)
    delete body.password

    const data = {
        ...body, password: senhaEcriptografada
    }

    await autenticacaoService.criarUsuario(data)
    res.sendStatus(201)
}

export async function logar(req: Request, res: Response) {
    const { email, password } = req.body;
    const SECRET = process.env.JWT_SECRET;

    const emailUsuario = await autenticacaoService.verificaEmailLogin(email)

    // const senhaUsuario = await autenticacaoService.verificaSenha(password, emailUsuario)

    // const isValidPssword = bcrypt.compareSync(password, validUser[0].password);
    // if (!isValidPssword) {
    //     return res.status(401).send('Invalid email or password.');
    // }

    // const token = jwt.sign(validUser[0], SECRET, {
    //     expiresIn: 60 * 60 * 24,
    // });
    // res.status(200).json({
    //     auth: true,
    //     name: validUser[0].name,
    //     image: validUser[0].image,
    //     token: token,
    //     userId: validUser[0].id,
    // });

}
