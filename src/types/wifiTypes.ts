import { Wifi } from "@prisma/client";

export type IWifi = Wifi

export type IWifiData = Omit<Wifi, "id">