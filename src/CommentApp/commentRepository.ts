import client from '../client/prismaClient'
import { Prisma, PrismaClient } from "@prisma/client";

import { PrismaClientKnownRequestError, PrismaClientUnknownRequestError } from "@prisma/client/runtime/library";
import { errors, IErrors } from '../config/errorCodes';

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
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
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
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}


const commentRepository = {
    getAllCommentsByPostId: getAllCommentsByPostId,
    getAllCommentsByUserId: getAllCommentsByUserId
}

export default commentRepository