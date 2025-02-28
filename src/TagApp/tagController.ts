import { Request, Response } from "express"
// не используем
import { IError, ISuccess } from "../types/types"
import tagService from "./tagService"
// не используем
import { CreateTag, TagWithPosts } from "./types"




async function createTag(req: Request, res: Response) {
    const data = req.body
    const result = await tagService.createTag(data)

    if (result.status === "error") {
        res.send(result.message)
        return
    }

    res.send(`Your tag ${result.data.name} was successfully created`)
}


async function getAllTags(req: Request, res: Response) {
    const result = await tagService.getAllTags()
    res.json(result)
}


const tagController = {
    createTag: createTag,
    getAllTags: getAllTags
}

export default tagController