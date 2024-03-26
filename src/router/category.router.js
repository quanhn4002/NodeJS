import express from "express";
import {
  index,
  getByCate,
  postCate,
  putCate,
  deleteCate,
} from "../controllers/category.Controller.js";
const router = express.Router();
router.get("/", index);
router.get("/:id", getByCate);
//add sản phẩm
router.post("/", postCate);
//sửa sản phẩm
router.put("/:id", putCate);
//xóa sản phẩm
router.delete("/:id", deleteCate);
export default router;
