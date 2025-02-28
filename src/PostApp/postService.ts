// Сервіси - це функції, які виконують основну логіку функцій відображення
// не используешь
import { Prisma } from '@prisma/client'
import postRepository from "./postRepository"
import { CreateComment, CreatePost, PostWithComments } from './types'
import { IError, ISuccess } from '../types/types'



async function getAllPosts(): Promise <ISuccess<PostWithComments[]> | IError>{
    
    const posts = await postRepository.getAllPosts()

    if (!posts) {
        return {status: "error", message: "Error when getting products"}
    }

    return {status: "success", data: posts}

}

async function getPostById(id: number): Promise<ISuccess<PostWithComments> | IError>{
    const post = await postRepository.getPostById(id)

    if (!post) {
        return {status: "error", message: "Post was not found"}
    }

    return {status: "success", data: post}
}

async function createPost(data:CreatePost): Promise <ISuccess<PostWithComments> | IError>{
    const post = await postRepository.createOnePost(data)

    if (!post) {
        return {status: "error", message: "Error when creating a post"}
    }

    return {status: "success", data:post}
}

async function deletePost(id: number): Promise <ISuccess<PostWithComments> | IError>{
    const post = await postRepository.deletePost(id)

    if (!post) {
        return {status: "error", message: "Error when deleting a post"}
    }

    return {status: "success", data:post}
}


async function createOneComment(data: CreateComment): Promise<ISuccess<CreateComment> | IError>{
    const comment = await postRepository.createOneComment(data)
    
    if (!comment) {
        return {status: "error", message: "Error when creating a comment"}
    }

    return {status:"success", data:comment}
}

// async function findPostWithComments(id: number){
//     const post = await postRepository.findPostWithComments(id)
    
//     return post

// }

const postService = {
    getAllPosts: getAllPosts, 
    getPostById: getPostById, 
    createPost: createPost, 
    deletePost: deletePost, 
    createOneComment:createOneComment,
    // findPostWithComments:findPostWithComments
}


export default postService