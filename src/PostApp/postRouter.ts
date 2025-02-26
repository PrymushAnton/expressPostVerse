// Роутери - це функції, які по переходу користувача на задане посилання,
// викликає передану функцію-контроллер.
// Роутери, контроллери, сервіси потрібні для того, щоб зменшити кількість коду у файлі з сервером,
// та розбити цей код на окремі блоки для легшої роботи розробника з цим кодом.

import { Router } from 'express'
import postController from './postController'
import { authMiddleware } from '../middlewares/authMiddleware'
import { userRoleMiddleware } from '../middlewares/userRoleMiddleware'

// const express_app: Express = require('express')
const router = Router()
// const postController = require('../controllers/postController')

router.get("/all", postController.getAllPosts)
// authMiddleware, userRoleMiddleware,
router.post('/create', authMiddleware, userRoleMiddleware, postController.createPost)
router.post('/delete', authMiddleware, userRoleMiddleware, postController.deletePost)

router.get("/:id", postController.getPostById)


router.post('/:postId/create/comment', postController.createOneComment)




export default router