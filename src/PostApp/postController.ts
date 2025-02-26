// Контроллери - це функції, які виконують приймають запити та надсилають відповіді.
// Також у контроллерах викликаємо функції-сервіси, які виконують основну логіку бек-енду.

import { Request, Response } from 'express'
import postService from './postService'


async function getAllPosts(req: Request, res: Response){
    const context = await postService.getAllPosts()
    if (context.status === "error") {
        res.send("error")
    } else {
        res.render('posts', {posts: context.data})
    }
}

async function getPostById(req: Request, res: Response){
    const id = req.params.id
    const result = await postService.getPostById(parseInt(id))

    if (result.status === "error") {
        res.send("error")
    } else {
        res.render('post', {post: result.data})

    }

}

async function createPost(req: Request, res: Response){
    const data = req.body

    const result = await postService.createPost(data)
    if (result.status === "error") {
        res.send('error');
    } else {
        res.send('Your post was succesfully published.')
    }
}



async function deletePost(req: Request, res: Response){
    const data = req.body

    const result = await postService.deletePost(data)
    if (result.status === "error") {
        res.send('error');
    } else {
        res.send('Post was succesfully deleted.')
    }
}


async function createOneComment(req: Request, res: Response){
    const data = req.body

    const result = await postService.createOneComment(data)
    if (result.status === "error") {
        res.send('error');
    } else {
        res.send('Comment was succesfully published.')
    }

}

const postController = {
    createOneComment: createOneComment,
    deletePost: deletePost,
    createPost: createPost,
    getAllPosts: getAllPosts,
    getPostById: getPostById
}

export default postController