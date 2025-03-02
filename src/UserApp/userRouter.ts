import { Router } from 'express'
import userController from './userController'


const userRouter = Router()

userRouter.get('/login/', userController.renderLoginPage)
userRouter.post('/login/', userController.loginUser)


userRouter.get('/registration/', userController.renderRegistrationPage)
userRouter.post('/registration/', userController.authRegistration)


export default userRouter