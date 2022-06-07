import { Application } from "express";
import logger from "morgan";
import router from "../router";

require("dotenv").config();

export default class Server {
  app: Application;
  port: number;

  constructor(app: Application, port: number) {
    this.app = app;
    this.port = port;
  }

  config() :void {
    // Log
    this.app.use(logger("dev"));

    // Routes
    this.app.use("/api", router);
  }

  run() :any {
    return this.app.listen(this.port, () : void => {
      return console.log(
        `Express is listening at http://localhost:${this.port}`
      );
    });
  }
}
