import client from '../client/prismaClient'
import { Prisma, PrismaClient } from "@prisma/client";

import { PrismaClientKnownRequestError, PrismaClientUnknownRequestError } from "@prisma/client/runtime/library";

async function getAllCommentsByPostId(postId:number){
    try{
        const comments = await client.comment.findMany({
            where: {
                postId: postId
            }
        })
        return comments
    } catch(err){
        if (err instanceof PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message)
                throw err
            } else if (err.code == 'P2015'){
                console.log(err.message)
                throw err
            } else if (err.code == 'P2019'){
                console.log(err.message)
                throw err
            } 
        }
    }
}



async function getAllCommentsByUserId(userId:number){
    try{
        const comments = await client.comment.findMany({
            where: {
                userId: userId
            }
        })
        return comments
    } catch(err){
        if (err instanceof PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message)
                throw err
            } else if (err.code == 'P2015'){
                console.log(err.message)
                throw err
            } else if (err.code == 'P2019'){
                console.log(err.message)
                throw err
            } 
        }
    }
}


const commentRepository = {
    getAllCommentsByPostId: getAllCommentsByPostId,
    getAllCommentsByUserId: getAllCommentsByUserId
}

export default commentRepository