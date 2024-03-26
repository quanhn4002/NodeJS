import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", { name: "chinhpd" });
});

router.get("/tintuc", (req, res) => {
  res.send("tin tức");
});

export default router;
