import express from "express";
import {
  getCartByUser,
  addCart,
  updateItem,
} from "../controllers/cart.Controller.js";

const router = express.Router();

router.post("/", addCart);
router.get("/:id", getCartByUser);

router.put("/:id", updateItem);
export default router;
