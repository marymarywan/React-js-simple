import express from 'express'
import { addPost, deletePost, getPost } from '../controllers/post.js'

const router = express.Router()

router.get("/get", getPost)
router.post("/", addPost)
router.delete("/:id", deletePost)


export default router
