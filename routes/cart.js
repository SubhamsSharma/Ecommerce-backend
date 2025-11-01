import { Router } from "express";
import { addToCart, getCart, removeFromCart } from "../controllers/CartController.js";
 export const router = Router()

router.route("/").get(getCart).post(addToCart)
router.route("/:id").delete(removeFromCart)
