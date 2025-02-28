import {Request, Response, NextFunction} from 'express';
// не используешь
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '../config/token';

export function userRoleMiddleware(req: Request, res: Response, next: NextFunction){
    // не надо
    // let cookies = req.cookies
    // cookies = {user:JSON.parse(cookies.user)}
    console.log('roleeeeeeeeee',res.locals.user.role)
    if (res.locals.user.role == "admin"){
        next()
    } else {
        res.sendStatus(403)
    }
}
