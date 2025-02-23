


import { Router } from "express";
import postControllerApi from './postControllerApi'

const postRouter = Router()

postRouter.get('/all', postControllerApi.getAllPostsApi)
postRouter.get('/:id', postControllerApi.findPostWithComments)


export default postRouter