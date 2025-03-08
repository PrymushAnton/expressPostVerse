import { Router } from "express";
import postControllerApi from './postControllerApi'

const router = Router()

router.get('/all', postControllerApi.getAllPostsApi)
router.get('/:id', postControllerApi.findPostWithComments)


export default router