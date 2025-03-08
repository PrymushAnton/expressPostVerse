import { Prisma } from "@prisma/client";

export type Post = Prisma.PostGetPayload<{
    include: {
        Comments: true,
        User: true,
        Tag: true
    }
}>

export type CreatePost = Prisma.PostUncheckedCreateInput
// createComment в приложении постов?
export type CreateComment = Prisma.CommentUncheckedCreateInput