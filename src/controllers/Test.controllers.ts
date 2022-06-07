import { Request, Response } from "express";

export default class TestControllers {
    get(req: Request, res: Response) {
      console.log('controller test get')
      try {
        return res.send({
          status: "success",
          message: "Method Get Test Controller",
          // data
        });
      } catch (error) {
        throw error;
      }
    }
  
    post(req: Request, res: Response) {
      console.log('controller test post')
      try {
        return res.send({
          status: "success",
          message: "Method Post Test Controller",
        });
      } catch (error) {
        throw error;
      }
    }
  
  }
  