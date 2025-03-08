import client from '../client/prismaClient'
import { Prisma } from "@prisma/client";
import { consoleLogError } from '../config/consoleLogError';


async function getAllCommentsByPostId(postId:number){
    try{
        const comments = await client.comment.findMany({
            where: {
                postId: postId
            },
            include: {
                Post: true,
                User: true
            }
        })
        return comments
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            consoleLogError(error)
        }
    }
}


async function getAllCommentsByUserId(userId:number){
    try{
        const comments = await client.comment.findMany({
            where: {
                userId: userId
            },
            include: {
                Post: true,
                User: true
            }
        })
        return comments
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            consoleLogError(error)
        }
    }
}


const commentRepository = {
    getAllCommentsByPostId: getAllCommentsByPostId,
    getAllCommentsByUserId: getAllCommentsByUserId
}

export default commentRepository