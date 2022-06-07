// Modules
import { Router, Request, Response, NextFunction } from "express";

// Controllers
import TestControllers from "../controllers/Test.controllers";

// Middlewares
import TestMD from "../middlewares/Test.md";

const router = Router();

// Middleware all (*)
router.use((req: Request, res: Response, next: NextFunction) =>
  new TestMD().checkHeader(req, res, next)
);

/*
 * Router
 * ****** */
router
  .route("/")
  .get((req: Request, res: Response) => new TestControllers().get(req, res))
  .post((req: Request, res: Response) => new TestControllers().post(req, res));

/*
 *  / Router
 * ********* */

export default router;
