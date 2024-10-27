import { Request, Response } from 'express'
import userService from './userService'


function renderLoginPage(req: Request, res: Response){
    res.render('login')
}

async function loginUser(req: Request, res: Response){
    console.log(req.body)
    const data = req.body
    const user: any = await userService.findUserByEmail(data.email, data.password)
    if (user instanceof String){
        res.sendStatus(401)
    } else {
        res.cookie('user', JSON.stringify(user))
        res.sendStatus(200)
    }
}


function renderRegistrationPage(req: Request, res: Response){
    res.render('registration')
}

async function authRegistration(req: Request, res: Response){
    console.log("Contoller", req.body)

    const data = req.body
    const user: any = await userService.createUser(data)
    if (user instanceof String){
        res.sendStatus(401)
    } else {
        res.cookie('user', JSON.stringify(user))
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