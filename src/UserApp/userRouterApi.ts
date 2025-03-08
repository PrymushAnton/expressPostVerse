import {Router} from "express" 
import userControllerApi from "./userControllerApi"

const userApiRouter = Router()

userApiRouter.post("/api/registration/", userControllerApi.registerUser)
userApiRouter.post("/api/login/", userControllerApi.authUser)

export default userApiRouter