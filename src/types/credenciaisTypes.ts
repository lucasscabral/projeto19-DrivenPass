import { Credentials } from "@prisma/client";

export type ICredenciais = Credentials

export type ICredenciaisData = Omit<Credentials, "id">