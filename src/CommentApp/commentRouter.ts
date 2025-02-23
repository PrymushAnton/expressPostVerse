

import { Router } from "express";
import commentController from "./commentController";

const commentRouter = Router()

commentRouter.get("/commentPost/:postId", commentController.getAllCommentsByPostId)
commentRouter.get("/commentUser/:userId", commentController.getAllCommentsByUserId)


export default commentRouter