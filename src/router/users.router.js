import express from "express";

import {
  index,
  getIdUser,
  postUser,
  putUser,
  deleteUser,
  signup,
  signin,
} from "../controllers/users.controllers.js";

const router = express.Router();
router.get("/", index);
router.get("/:id", getIdUser);
router.post("/", postUser);
router.post("/signup", signup);
router.post("/signin", signin);
router.put("/:id", putUser);
router.delete("/:id", deleteUser);

export default router;
