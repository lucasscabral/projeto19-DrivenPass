import { Request, Response, NextFunction } from "express";

function validateSchema(schema: any) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            res.status(422).send(error.details.map((e: any) => e.message).join(', '));
            return;
        }
        next();
    };
}

export default validateSchema;