// Сервіси - це функції, які виконують основну логіку функцій відображення
import { Prisma } from '@prisma/client'
import postRepository from "./postRepository"

const posts = [
    {
        name: 'NodeJS is so cool!',
        author: 'Serjik',
        text: "Lorem ipsum abv yay cool wow Lorem ipsum abv yay cool wow"
    },
    {
        name: 'How to center a div?',
        author: 'Tosha',
        text: 'Lorem ipsum abv yay cool wow Lorem ipsum abv yay cool wow Lorem ipsum abv yay cool wow'
    },
    {
        name: 'What color of nail polish is in trend today?',
        author: "Kamilla",
        text: 'Lorem ipsum abv yay cool wow'
    }
]


async function getAllPosts(){
    const context = {
        posts: await postRepository.getAllPosts()
    }
    return context
}

async function getPostById(id: number){
    const context = {
        post: await postRepository.getPostById(id)
    }

    return {
        context: context
    }
}

async function createPost(data:Prisma.PostCreateInput){
    await postRepository.createOnePost(data)
}

async function deletePost(id: number){
    await postRepository.deletePost(id)
}


async function createOneComment(data: Prisma.CommentUncheckedCreateInput){
    const comment = await postRepository.createOneComment(data)
    console.log(comment)
}

async function findPostWithComments(id: number){
    const post = await postRepository.findPostWithComments(id)
    
    return post

}

export { getAllPosts, getPostById, createPost, deletePost, createOneComment, findPostWithComments}