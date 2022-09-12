import prisma from "../database/prismaClient"
import { IWifiData } from "../types/wifiTypes"


export async function buscaPeloTitulo(userId: number, wifiTitle: string) {
    return await prisma.wifi.findMany({
        where: {
            wifiTitle,
            AND: {
                userId
            }
        }
    })
}

export async function insereWifi(dadosCartao: IWifiData) {
    await prisma.wifi.create({ data: dadosCartao })
}

export async function buscarTodosWifi(userId: number) {
    return await prisma.wifi.findMany({ where: { userId } })
}

export async function buscaWifi(wifiId: number) {
    return await prisma.wifi.findUnique({ where: { id: wifiId } })
}

export async function deletarWifi(wifiId: number) {
    await prisma.wifi.delete({ where: { id: wifiId } })
}