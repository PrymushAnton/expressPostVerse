import { Request, Response } from "express"
import tagService from "./tagService"


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