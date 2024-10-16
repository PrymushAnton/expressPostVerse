import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function createPost(){
    const post = await prisma.post.create({
        data: {
            name: "Post about smth",
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
    await createPost()
    await createManyPosts()
    await updatePost()
    await findPost()
    await findManyPosts()
    await deletePost(delete_id)
}

main(1).then(() => {
    prisma.$disconnect()
}).catch((err) => {
    console.log(err)
    prisma.$disconnect()
})