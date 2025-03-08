import { Request, Response } from 'express'
import postService from './postService'

async function getAllPostsApi(req: Request, res: Response){
    const result = await postService.getAllPosts()

    res.json(result)

}

async function findPostWithComments(req: Request, res: Response){
    const id = req.params.id
    const result = await postService.getPostById(+id)
    res.json(result)
}

const getPostApi =  {
    getAllPostsApi: getAllPostsApi,
    findPostWithComments: findPostWithComments
}

export default getPostApi