import {Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '../config/token';

export function userRoleMiddleware(req: Request, res: Response, next: NextFunction){
    let cookies = req.cookies
    // cookies = {user:JSON.parse(cookies.user)}
    console.log('roleeeeee',res.locals.user.role)
    if (res.locals.user.role == "admin"){
        next()
    } else {
        res.sendStatus(403)
    }
}
