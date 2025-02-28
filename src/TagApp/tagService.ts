// ?
import { create } from "ts-node";
import { IError, ISuccess } from "../types/types";
import tagRepository from "./tagRepository"
import { CreateTag, TagWithPosts } from "./types";


async function createTag(data: CreateTag): Promise<IError | ISuccess<TagWithPosts>> {
    const tag = await tagRepository.createTag(data)

    if (!tag) {
        return {status: "error", message: "Error when creating a tag"}
    }

    return {status: "success", data: tag}
}


async function getAllTags(): Promise<IError | ISuccess<TagWithPosts[]>> {
    const tags = await tagRepository.getAllTags()

    if (!tags) {
        return {status: "error", message: "Error when getting all tags"}
    }

    return {status: "success", data: tags}
}


const tagService = {
    createTag: createTag,
    getAllTags: getAllTags
}

export default tagService