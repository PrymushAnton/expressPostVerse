import { Prisma } from "@prisma/client";

export type User = Prisma.UserGetPayload<{
    omit: {
        password: true
    }
}>


export type CreateUser = Prisma.UserUncheckedCreateInput