import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export async function validarCredencial(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');

    if (!token) {
        throw { code: "unauthorized", message: "Acesso negado. Nenhum token fornecido." }
    }

    let corpoToken;

    try {
        const SECRETJWT: string = process.env.JWT_SECRET || "";
        const decoded: string | JwtPayload = jwt.verify(token, SECRETJWT);

        corpoToken = decoded;
    } catch (error) {
        res
            .status(401)
            .json({ auth: false, message: 'Failed to authenticate token.' });
        return;
    }
    console.log(corpoToken)
    res.locals.corpoToken = corpoToken;

    next();
}