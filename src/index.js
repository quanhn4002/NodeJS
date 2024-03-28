// npm init -y
// npm i express
// chạy node index.js

//map. filter, reduce, some, every

import express from "express";
import { engine } from "express-handlebars"; /*-- theo kiểu es6 ECMA*/
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import "dotenv/config";
const app = express();
const port = process.env.PORT;
//connect MongoDB

mongoose
  .connect(process.env.CONNECTION_STRING_MONGODB)
  .then(() => console.log("Kết Nối Thành Công Rồi!"));
/// nhận dữ liệu khi post
app.use(express.json());
//view
// const _filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(_filename);
// app.engine("handlebars", engine());
// app.set("view engine", "handlebars");
// app.set("views", path.join(__dirname, "/views"));

// import router
import checkAuth from "./middleware/auth.js";
import productRouter from "./router/product.router.js";
app.use("/product", checkAuth, productRouter);
import categoryRouter from "./router/category.router.js";
app.use("/category", categoryRouter);
import commonRouter from "./router/comont.router.js";
app.use("/", commonRouter);
import userRouter from "./router/users.router.js";
app.use("/user", userRouter);
import cartRouter from "./router/cart.router.js";
app.use("/cart", cartRouter);

//middleware

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
