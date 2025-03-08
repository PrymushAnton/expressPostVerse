import client from "../client/prismaClient";
import { CreateTag } from "./types"
import { Prisma } from "@prisma/client";
import { consoleLogError } from "../config/consoleLogError";

async function createTag(data: CreateTag){

    try {
        const tag = await client.tag.create({
            data: data,
            include: {
                Posts: true
            }
        })
        return tag
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            consoleLogError(error)
        }
    }
}


async function getAllTags() {
    try {
        const tags = await client.tag.findMany({
            include: {
                Posts:true
            }
        })
        return tags
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            consoleLogError(error)
        }
    }
}


const tagRepository = {
    createTag: createTag,
    getAllTags: getAllTags
}

export default tagRepository