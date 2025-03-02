import {Router} from "express" 
import userControllerApi from "./userControllerApi"
import { authMiddlewareToken } from "../middlewares/authTokenMiddleware"

const userApiRouter = Router()

userApiRouter.post("/registration/", userControllerApi.registerUser)
userApiRouter.post("/login/", userControllerApi.authUser)

userApiRouter.get("/me", authMiddlewareToken, userControllerApi.getUserById)


export default userApiRouter