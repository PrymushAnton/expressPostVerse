import commentRepository from "./commentRepository"
import {Comment, CreateComment} from "./types"
import { ISuccess, IError } from "../types/types"


async function getAllCommentsByPostId(postId:number): Promise<ISuccess<Comment[]> | IError>{
    
    const comments = await commentRepository.getAllCommentsByPostId(postId)

    if (!comments){
        return {status: "error", message: "Post not found"}
    }
    return {status: "success", data:comments}
}


async function createCommentByPostId(data: CreateComment): Promise<ISuccess<CreateComment> | IError>{
    
    const comment = await commentRepository.createCommentByPostId(data)

    if (!comment){
        return {status: "error", message: "Comment was not created"}
    }
    return {status: "success", data:comment}
}

async function getAllCommentsByUserId(userId:number): Promise<ISuccess<Comment[]> | IError>{
    
    const comments = await commentRepository.getAllCommentsByUserId(userId)

    if (!comments){
        return {status: "error", message: "User not found"}
    }
    return {status: "success", data:comments}
}


const commentService = {
    getAllCommentsByPostId: getAllCommentsByPostId,
    getAllCommentsByUserId: getAllCommentsByUserId,
    createCommentByPostId: createCommentByPostId
}

export default commentService