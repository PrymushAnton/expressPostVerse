import { Router } from "express";
import tagController from "./tagController";

const router = Router()

router.post("/create", tagController.createTag)
router.get("/all", tagController.getAllTags)

export default router