import { Request, Response } from 'express'
import userService from './userService'
import { SECRET_KEY } from '../config/token'
import { sign } from 'jsonwebtoken'

async function authUser(req: Request, res: Response){

    const data = req.body
    const result = await userService.loginUser(data.email, data.password)
    
    if (result.status == 'error'){
        res.json(result)
        return 
    }

    const token = sign(result.data, SECRET_KEY, {expiresIn: '1h'})
    res.cookie('token', token)
    res.sendStatus(200)
}

async function registerUser(req: Request, res: Response){
    const data = req.body
    const result = await userService.createUser(data)
    if (result.status == 'error'){
        res.send(result.message)
        return
    }
    const token = sign(result.data, SECRET_KEY, {expiresIn: '1h'})
    res.cookie('token', token)
    res.sendStatus(200)

}



const userController = {
    authUser: authUser,
    registerUser: registerUser,
}

export default userController