import client from "../client/prismaClient";
import {CreateTag} from "./types"
import { errors, IErrors } from "../config/errorCodes";
import { Prisma } from "@prisma/client";

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
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
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
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}


const tagRepository = {
    createTag: createTag,
    getAllTags: getAllTags
}

export default tagRepository