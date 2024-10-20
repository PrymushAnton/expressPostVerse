import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function createOnePost(){
    const post = await prisma.post.create({
        data: {
            name: "Programming",
            author: "Roma Semenov",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing"
        }
    })
    console.log(post)
}

async function createManyPosts(){
    const posts = await prisma.post.createMany({
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
    console.log(posts)
}


async function createOneComment(){
    const comment = await prisma.comment.create({
        data: {
            title: "Working at a factory is better!",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            postId: 12
        }
    })
    console.log(comment)
}

async function createManyComments(){
    const comment = await prisma.comment.createMany({
        data: [
            {
                title: "You have an error in code!",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                postId: 12
            },
            {
                title: "Your tutorials is the best!",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                postId: 12
            }
        ]
    })
    console.log(comment)
}


async function deleteComment(){
    const comment = await prisma.comment.delete({
        where: {
            id: 1
        }
    })
    console.log(comment)
}

async function findCommentById(){
    const comment = await prisma.comment.findUnique({
        where: {
            id: 2
        }
    })
    console.log(comment)
}

async function printInfoAboutPost(){
    const comment: any = await prisma.comment.findUnique({
        where: {
            id: 2
        }
    })
    const post = await prisma.post.findUnique({
        where: {
            id: comment.postId
        }
    })
    console.log(post)
}

async function printInfoAboutPostComments(){

    const post: any = await prisma.post.findUnique({
        where: {
            id: 12
        }
    })

    const comments: any = await prisma.comment.findMany({
        where: {
            postId: post.id
        }
    })

    console.log(comments)
}

async function updateComment(){
    const comment = await prisma.comment.update({
        where: {
            id: 3
        },
        data: {
            text: "COMMENT"
        }
    })
    console.log(comment)
}


async function updatePost(){
    const post = await prisma.post.update({
        where: {
            id: 1
        },
        data: {
            text: "NOTTTTT POST"
        }
    })
    console.log(post)
}

async function findPost(){
    const post = await prisma.post.findUnique({
        where: {
            id: 2
        }
    })
    console.log(post)
}

async function findManyPosts(){
    const post = await prisma.post.findMany({
        where: {
            author: "Roma Semenov"
        }
    })
    console.log(post)
}

async function deletePost(delete_id: any){
    const post = await prisma.post.delete({
        where: {
            id: delete_id
        }
    })
    console.log(post)
}

async function main(delete_id: any){
    await createOnePost()
    await createManyPosts()
    await updatePost()
    await findPost()
    await findManyPosts()
    await deletePost(delete_id)
}

async function commentsAndPosts(){
    await createOneComment()
    await createManyComments()
    await deleteComment()
    await findCommentById()
    await printInfoAboutPost()
    await printInfoAboutPostComments()
    await updateComment()
}

commentsAndPosts().then(() => {
    prisma.$disconnect()
}).catch((err) => {
    console.log(err)
    prisma.$disconnect()
})