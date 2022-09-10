import { Secure_notes } from "@prisma/client";

export type ISecure = Secure_notes

export type ISecureData = Omit<Secure_notes, "id">