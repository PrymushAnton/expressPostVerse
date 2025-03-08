import { Prisma } from "@prisma/client";
import client from '../client/prismaClient'
import { errors, IErrors } from '../config/errorCodes'
import { CreateComment, CreatePost } from "./types"

async function getAllPosts(){
    try{
        const posts = await client.post.findMany({
            include:{
                Comments: true,
                User: true,
                Tag: true
            }
        })
        return posts
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}


async function deletePost(id: number){
    try{
        const post = await client.post.delete({
            where: {
                id: id
            },
            include:{
                Comments: true,
                User: true,
                Tag: true
            }
        })
        return post
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}


async function getPostById(id:number){
    try{
        const post = await client.post.findUnique({
            where:{
                id:id
            },
            include:{
                Comments: true,
                User: true,
                Tag: true
            }
        })
        return post
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

async function createOneComment(data: CreateComment){
    try{
        const comment = await client.comment.create({
            data: data,
            include: {
                User: true,
                Post: true
            }
        })
        return comment
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

async function createOnePost(data:CreatePost){
    try{
        const post = await client.post.create({
            data: data,
            include: {
                Comments: true,
                User: true,
                Tag: true
            }
        })
        return post
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
    
}




const postRepository = {
    getAllPosts:getAllPosts,
    getPostById:getPostById,
    createOnePost:createOnePost,
    createOneComment: createOneComment,
    deletePost: deletePost,
}
export default postRepository