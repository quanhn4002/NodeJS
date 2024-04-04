import mongoose from "mongoose";
const bookCateSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Không được để trống "],
  },
});
export default mongoose.model("bookCategories", bookCateSchema);
