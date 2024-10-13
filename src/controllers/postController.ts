// Контроллери - це функції, які виконують приймають запити та надсилають відповіді.
// Також у контроллерах викликаємо функції-сервіси, які виконують основну логіку бек-енду.

import { Request, Response } from 'express'
import { getAllPosts as getAllPostsService, getPostById as getPostByIdService, createPost as createPostService} from '../services/postService'
// const postService = require("../services/postService")

function getAllPosts(req: Request, res: Response){
    const context = getAllPostsService()
    
    res.render('posts', context)
}

function getPostById(req: Request, res: Response){
    const id: any = req.params.id

    const data = getPostByIdService(id)
    if (id <= data.length && id > 0){
        res.render('post', data.context)
    } else{
        res.render("incorrect_post")
    }
}

function createPost(req: Request, res: Response){
    const data = req.body
    createPostService(data)
    res.send('Your post was succesfully published.')
}

export { getAllPosts, getPostById, createPost }