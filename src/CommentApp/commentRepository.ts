import client from '../client/prismaClient'
import { Prisma } from "@prisma/client";
import { consoleLogError } from '../config/consoleLogError';
import { CreateComment } from './types';


async function getAllCommentsByPostId(postId:number){
    try{
        const comments = await client.comment.findMany({
            where: {
                postId: postId
            },
            omit:{
                id: true,
                postId: true,
                userId: true
            },
            include: {
                User: {
                    select: {
                        username: true
                    }
                }
            }
        })
        return comments
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            consoleLogError(error)
        }
    }
}

async function createCommentByPostId(data: CreateComment){
    try{
        const comment = await client.comment.create({
            data: data
        })
        return comment
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
    getAllCommentsByUserId: getAllCommentsByUserId,
    createCommentByPostId: createCommentByPostId
}

export default commentRepository