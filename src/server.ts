import express, { Application } from 'express';
import Server from './server/Server'
import { CONFIG } from './config'
import { IServer } from './types'

// Import .env
require('dotenv').config();

const app: Application = express();
const port: number = CONFIG.PORT;

const server: IServer = new Server(app, port)
server.config()

server.run()