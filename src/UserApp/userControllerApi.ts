import { Request, Response } from 'express'
import userService from './userService'
import { SECRET_KEY } from '../config/token'
import { sign } from 'jsonwebtoken'

async function authUser(req: Request, res: Response){

    const data = req.body
    const result = await userService.loginUser(data.email, data.password)
    
    res.json(result)
}

async function registerUser(req: Request, res: Response){
    const data = req.body
    const result = await userService.createUser(data)
    res.json(result)
}



const userController = {
    authUser: authUser,
    registerUser: registerUser,
}

export default userController