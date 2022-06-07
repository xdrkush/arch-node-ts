import { Application } from "express"

export interface IConfig {
    PORT: number
}

export interface IServer {
    app: Application,
    port: number,
    config: any,
    run: any
}