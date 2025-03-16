
import {Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '../config/token';


export function authMiddlewareToken(req: Request, res: Response, next: NextFunction){

    if (!req.headers.authorization){
        res.json({status: "error", message: "There is no authorization header"})
        return
    }
    let header = req.headers.authorization

    if (!header?.startsWith("Bearer ")) {
        res.json({status: "error", message: "Header does not start with Bearer"})
        return
    }
    let token = header ? header.split("Bearer ").at(-1) : header

    if (!token) {
        res.json({status: "error", message: "There is no token inside header"})
        return
    }
    
    let resultToken

    try{
        resultToken = verify(token, SECRET_KEY)
    } catch (error) {
        if (error instanceof Error) resultToken = error.message
    }

    if (!resultToken) {
        res.json({status: "error", message: `Invalid token, ${resultToken}`})
        return
    }

    if (typeof(resultToken) === "string") {
        res.json({status: "error", message: `Invalid token, ${resultToken}`})
        return
    }


    if (!("exp" in resultToken)) {
        res.json({status: "error", message: "Token object does not have expired (exp) key"})
        return
    }


    function isTokenExpired(exp: number): boolean {
        const currentTime = Math.floor(Date.now() / 1000);
        return currentTime >= exp;
    }

    if (isTokenExpired(resultToken.exp ? resultToken.exp : 0)) {
        res.json({status: "error", message: "Token is expired"})
        return
    }
    res.locals.userId = resultToken.id
    next()
}
