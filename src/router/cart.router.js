import express from "express";
import {
  index,
  getByUser,
  postCart,
  putCart,
  deleteCart,
} from "../controllers/cart.Controller.js";
const router = express.Router();
//lấy danh sách sản phẩm
router.get("/", index);
//lấy danh sách sản phẩm theo id
router.get("/userId/:id", getByUser);
//add sản phẩm
router.post("/", postCart);
//sửa sản phẩm
router.put("/:id", putCart);
//xóa sản phẩm
router.delete("/:id", deleteCart);
//lấy ra sản phẩm theo category

export default router;
