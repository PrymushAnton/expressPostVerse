import { Prisma } from "@prisma/client";

export type Comment = Prisma.CommentGetPayload<{
    omit: {
        id: true,
        postId: true,
        userId: true
    },
    include:{
        User: {
            select: {
                username: true
            }
        }
    }
}>

export type CreateComment = Prisma.CommentUncheckedCreateInput