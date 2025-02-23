// Контроллери - це функції, які виконують приймають запити та надсилають відповіді.
// Також у контроллерах викликаємо функції-сервіси, які виконують основну логіку бек-енду.

import { Request, Response } from 'express'
import { createOneComment as createOneCommentService, getAllPosts as getAllPostsService, getPostById as getPostByIdService, createPost as createPostService, deletePost as deletePostService} from './postService'
import { JwtPayload, verify } from 'jsonwebtoken';
import { SECRET_KEY } from '../config/token';


async function getAllPosts(req: Request, res: Response){
    const context = await getAllPostsService()
    res.render('posts', context)
}

async function getPostById(req: Request, res: Response){
    const id: string = req.params.id
    const data = await getPostByIdService(parseInt(id))

    if (data.context.post === null || data.context.post === undefined){
        res.render("incorrect_post")
        
    } else {
        res.render('post', data.context)
    }

}

async function createPost(req: Request, res: Response){
    const data = req.body
    const cookies = req.cookies
    const token = verify(cookies.token, SECRET_KEY);

    console.log("USERSERVICE", !(typeof(token) === "string") && token.id)
    await createPostService(data)
    res.send('Your post was succesfully published.')
}



async function deletePost(req: Request, res: Response){
    const data = req.body
    console.log(data)
    await deletePostService(data.id)
    res.send('Your post was succesfully deleted.')
}


async function createOneComment(req: Request, res: Response){
    const data = req.body
    console.log(data)
    const cookies = req.cookies
    const token = verify(cookies.token, SECRET_KEY);
    console.log(token)
    // console.log("USERSERVICE", !(typeof(token) === "string") && token.id)
    await createOneCommentService({...data, userId: (token as JwtPayload).id})
    res.send('Your comment was succesfully published.')
}

export { getAllPosts, getPostById, createPost, deletePost, createOneComment }