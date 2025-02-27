import { Prisma } from "@prisma/client";



export type TagWithPosts = Prisma.TagGetPayload<{
    include: {
        Posts: true
    }
}>

export type CreateTag = Prisma.TagUncheckedCreateInput