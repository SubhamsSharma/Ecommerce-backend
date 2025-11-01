import { Router } from "express"
import { getAllProducts } from "../controllers/ProductController.js"
export const router = Router()
router.route("/").get(getAllProducts)