import { Prisma, PrismaClient } from "@prisma/client";
import client from '../client/prismaClient'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

async function getAllPosts(){
    try{
        const posts = await client.post.findMany({})
        return posts
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





async function createManyPosts(){
    try{
        const posts = await client.post.createMany({
            data: [
                {
                    name: "Posttt",
                    author: "Somebody",
                    text: "Somebodys post"
                },
                {
                    name: "PPPost",
                    author: "Bodysome",
                    text: "Bodysomes post"
                }
            ]
        })
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


async function createOneComment(id:number){
    try{
        const comment = await client.comment.create({
            data: {
                title: "Working at a factory is better!",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                postId: id
            }
        })
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

async function createManyComments(id:number){
    try{
        const comment = await client.comment.createMany({
            data: [
                {
                    title: "You have an error in code!",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                    postId: id
                },
                {
                    title: "Your tutorials is the best!",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                    postId: id
                }
            ]
        })
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


async function deleteComment(id:number){
    try{
        const comment = await client.comment.delete({
            where: {
                id: id
            }
        })
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

async function findCommentById(id:number){
    try{
        const comment = await client.comment.findUnique({
            where: {
                id: id
            }
        })
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

async function printInfoAboutPost(id:number){
    try{
        const comment: any = await client.comment.findUnique({
            where: {
                id: id
            }
        })
        const post = await client.post.findUnique({
            where: {
                id: comment.postId
            }
        })
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

async function printInfoAboutPostComments(id:number){
    try{
        const post: any = await client.post.findUnique({
            where: {
                id: id
            }
        })
    
        const comments: any = await client.comment.findMany({
            where: {
                postId: post.id
            }
        })
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

async function updateComment(id:number){
    try{
        const comment = await client.comment.update({
            where: {
                id: id
            },
            data: {
                text: "COMMENT"
            }
        })
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


async function updatePost(id:number){
    try{
        const post = await client.post.update({
            where: {
                id: id
            },
            data: {
                text: "NOTTTTT POST"
            }
        })
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

async function findPost(id:number){
    try{
        const post = await client.post.findUnique({
            where: {
                id: id
            }
        })
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

async function findManyPosts(author:string){
    try{
        const post = await client.post.findMany({
            where: {
                author: author
            }
        })
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

async function deletePost(id: number){
    try{
        const post = await client.post.delete({
            where: {
                id: id
            }
        })
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


async function getPostById(id:number){
    try{
        const post = await client.post.findUnique({
            where:{
                id:id
            }
        })
        return post
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

async function createOnePost(data:Prisma.PostCreateInput){
    try{
        const post = await client.post.create({
            data: data
        })
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

const postRepository = {
    getAllPosts:getAllPosts,
    getPostById:getPostById,
    createOnePost:createOnePost
}
export default postRepository