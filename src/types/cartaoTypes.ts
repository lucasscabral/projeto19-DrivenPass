import { Cards } from "@prisma/client";

export type ICards = Cards

export type ICardData = Omit<Cards, "id">