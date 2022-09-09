import { Credentials } from "@prisma/client";

export type ICredenciaisData = Omit<Credentials, "id">