import express, { Router } from "express";
import {
  addBook,
  deleteBook,
  editBook,
  getByidBook,
  index,
} from "../controllers/book.Controller.js";
const router = express.Router();
router.get("/", index);
router.get("/:id", getByidBook);
router.post("/", addBook);
router.put("/:id", editBook);
router.delete("/:id", deleteBook);
export default router;
