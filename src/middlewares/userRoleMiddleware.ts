import {Request, Response, NextFunction} from 'express';

export function userRoleMiddleware(req: Request, res: Response, next: NextFunction){
    console.log('roleeeeeeeeee',res.locals.user.role)
    if (res.locals.user.role == "admin"){
        next()
    } else {
        res.sendStatus(403)
    }
}
