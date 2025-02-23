

import { Request, Response } from "express";
import commentService from "./commentService"



async function getAllCommentsByPostId(req: Request, res: Response) {
    const id: string = req.params.postId
    const result = await commentService.getAllCommentsByPostId(+id)

    if (result.status == "error"){
        res.send(result.message)
    } else {
        res.render("comments", {comments: result.data})
    }

}

async function getAllCommentsByUserId(req: Request, res: Response) {
    const id: string = req.params.userId
    const result = await commentService.getAllCommentsByUserId(+id)

    if (result.status == "error"){
        res.send(result.message)
    } else {
        res.render("comments", {comments: result.data})
    }

}


const commentController = {
    getAllCommentsByPostId: getAllCommentsByPostId,
    getAllCommentsByUserId: getAllCommentsByUserId
}

export default commentController