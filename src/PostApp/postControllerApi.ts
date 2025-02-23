

import { Request, Response } from 'express'
import {getAllPosts as getAllPostsService, findPostWithComments as findPostWithCommentsService} from './postService'

async function getAllPostsApi(req: Request, res: Response){
    const result = await getAllPostsService()

    if (!result) {
        res.json({
            status: "error",
            message: "Error"
        })
        return
    }
    res.json({
        status: "success",
        data: result
    })
}



async function findPostWithComments(req: Request, res: Response){
    const id = req.params.id
    console.log(id)
    const result = await findPostWithCommentsService(+id)
    if (!result) {
        res.json({
            status: "error",
            message: "Wrong id"
        })
        return
    }
    res.json({
        status: "success",
        data: result
    })
}

const getPostApi =  {
    getAllPostsApi: getAllPostsApi,
    findPostWithComments: findPostWithComments
}

export default getPostApi