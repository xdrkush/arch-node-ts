import { Request, Response, NextFunction } from "express"

export default class TestMD {
    async checkHeader(req: Request, res: Response, next: NextFunction) {
        console.log('MD header', req.headers)
        if (req.headers) next()
        else res.status(204).json({message: "Une erreur est survenu !"})
    }
}