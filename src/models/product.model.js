import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  // nối bảng product với bảng categories
  categoryId: {
    type: mongoose.Types.ObjectId,
    ref: "categories",
  },
});
//kết nối với bảng
export default mongoose.model("products", productSchema);
