import express from "express";
import {
  index,
  getById,
  postPr,
  putPr,
  deletePr,
} from "../controllers/product.Controller.js";
const router = express.Router();
//lấy danh sách sản phẩm
router.get("/", index);
//lấy danh sách sản phẩm theo id
router.get("/:id", getById);
//add sản phẩm
router.post("/", postPr);
//sửa sản phẩm
router.put("/:id", putPr);
//xóa sản phẩm
router.delete("/:id", deletePr);
//lấy ra sản phẩm theo id

export default router;
