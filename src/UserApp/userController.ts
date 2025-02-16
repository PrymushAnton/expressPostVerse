import { Request, Response } from 'express'
import userService, {IError, ISuccess} from './userService'
import { SECRET_KEY } from '../config/token'
import { sign } from 'jsonwebtoken'


function renderLoginPage(req: Request, res: Response){
    res.render('login')
}

async function loginUser(req: Request, res: Response){
    const data = req.body
    const user = await userService.loginUser(data.email, data.password)


    function isIError(obj: any): obj is IError {
        return obj && obj.status === 'error' && typeof obj.message === 'string';
    }
    if (isIError(user)){
        res.sendStatus(401)
    } else {
        const token = sign(user.data, SECRET_KEY, {expiresIn:'1h'})
        res.cookie('token', token)
        res.sendStatus(200)
    }
}


function renderRegistrationPage(req: Request, res: Response){
    res.render('registration')
}

async function authRegistration(req: Request, res: Response){
    const data = req.body
    const user = await userService.createUser(data)
    if (user.status == 'error'){
        res.sendStatus(401)
    } else {
        const token = sign(user.data, SECRET_KEY, {expiresIn:'1h'})
        res.cookie('token', token)
        res.sendStatus(200)
    }
}

const userController = {
    renderLoginPage: renderLoginPage,
    loginUser: loginUser,
    renderRegistrationPage: renderRegistrationPage,
    authRegistration: authRegistration
}


export default userController