// Роутери - це функції, які по переходу користувача на задане посилання,
// викликає передану функцію-контроллер.
// Роутери, контроллери, сервіси потрібні для того, щоб зменшити кількість коду у файлі з сервером,
// та розбити цей код на окремі блоки для легшої роботи розробника з цим кодом.

const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')

router.get("/all", postController.getAllPosts)

router.get("/:id", postController.getPostById)

router.post('/create', postController.createPost)

module.exports = router