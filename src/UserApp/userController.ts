import { Request, Response } from 'express'
import userService from './userService'


function renderLoginPage(req: Request, res: Response){
    res.render('login')
}

async function loginUser(req: Request, res: Response){
    const data = req.body
    const result = await userService.loginUser(data.email, data.password)

    if (result.status === "error") {
        res.send(result.message)
        return
    }

    res.cookie("token", result.data)
    res.sendStatus(200)
}


function renderRegistrationPage(req: Request, res: Response){
    res.render('registration')
}

async function authRegistration(req: Request, res: Response){
    const data = req.body
    const result = await userService.createUser(data)
    if (result.status == 'error'){
        res.send(result.message)
        return
    }

    res.cookie('token', result.data)
    res.sendStatus(200)
    
}

const userController = {
    renderLoginPage: renderLoginPage,
    loginUser: loginUser,
    renderRegistrationPage: renderRegistrationPage,
    authRegistration: authRegistration
}


export default userController