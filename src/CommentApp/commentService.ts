import commentRepository from "./commentRepository"
import {Comment} from "./types"

interface ISuccess<T>{
    status: "success",
    data: T
}

interface IError{
    status: "error",
    message: string
}


async function getAllCommentsByPostId(postId:number): Promise<ISuccess<Comment[]> | IError>{
    
    const comments = await commentRepository.getAllCommentsByPostId(postId)

    if (!comments){
        return {status: "error", message: "Post not found"}
    }
    return {status: "success", data:comments}
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
    getAllCommentsByUserId: getAllCommentsByUserId
}

export default commentService