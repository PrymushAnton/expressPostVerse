import { Prisma } from "@prisma/client";

export type PostWithComments = Prisma.PostGetPayload<{
    include: {
        Comments: true,
        User: true
    }
}>

export type CreatePost = Prisma.PostUncheckedCreateInput

export type CreateComment = Prisma.CommentUncheckedCreateInput