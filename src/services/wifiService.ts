import dotenv from "dotenv"
dotenv.config()
import * as wifiRepository from "../repositories/wifiRepository"
import { IWifiData } from "../types/wifiTypes"
import Cryptr from "cryptr"

export async function checaTituloWifi(userId: number, titulowifi: string) {
    const wifi = await wifiRepository.buscaPeloTitulo(userId, titulowifi)
    if (wifi.length > 0) {
        throw { code: "unauthorized", message: "Usuário não pode ter mais de um wifi com o mesmo título" }
    }
}

export async function criptografaSenha(senha: string) {
    const chaveSecreta = process.env.CRYPTR_SECRET
    const cryptr = new Cryptr(`${chaveSecreta}`)

    return cryptr.encrypt(senha)
}

export async function criawifi(dadoswifi: IWifiData) {
    await wifiRepository.insereWifi(dadoswifi)
}

export async function todosWifis(userId: number) {
    return await wifiRepository.buscarTodosWifi(userId)
}

export async function buscaWifiId(userId: number, wifiId: number) {
    const wifi = await wifiRepository.buscaWifi(wifiId)
    if (wifi?.userId !== userId || !wifi) {
        throw { code: "forbidden", message: "Esse wifi não pertence a esse usuário ou a wifi não existe" }
    }
    return wifi
}

export async function deletaWifi(wifiId: number) {
    await wifiRepository.deletarWifi(wifiId)
}