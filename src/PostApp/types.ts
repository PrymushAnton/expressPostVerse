import { Prisma } from "@prisma/client";

// название type не точное
// либо уже Post :(
export type PostWithComments = Prisma.PostGetPayload<{
    include: {
        Comments: true,
        User: true,
        Tag: true
    }
}>

export type CreatePost = Prisma.PostUncheckedCreateInput
// createComment в приложении постов?
export type CreateComment = Prisma.CommentUncheckedCreateInput