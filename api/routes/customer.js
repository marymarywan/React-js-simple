import express from 'express'
import { deletePost, getId, getPost, post } from '../controllers/customer.js'

const router = express.Router()

router.get("/", getPost)
router.get("/:id", getId)
router.delete("/:id", deletePost)
router.post("/", post)


export default router
