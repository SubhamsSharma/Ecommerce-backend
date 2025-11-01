import { Router } from "express";
import { generateReciept } from "../controllers/CheckoutController.js";

export const router = Router();
router.route("/").post(generateReciept);
