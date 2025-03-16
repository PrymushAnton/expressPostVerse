import { Router } from "express";
import commentController from "./commentController";

const commentRouter = Router()

commentRouter.get("/post/:postId", commentController.getAllCommentsByPostId)
commentRouter.post("/post/create", commentController.createCommentByPostId)


commentRouter.get("/user/:userId", commentController.getAllCommentsByUserId)


export default commentRouter