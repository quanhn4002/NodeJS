import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "không được để trống"],
  },
  author: {
    type: String,
    require: [true, "kh được để trống"],
  },
  year: {
    type: Number,

    min: [100, "Tuổi không được lớn hơn 100"],
  },
  sale: {
    type: Boolean,
    default: false,
  },
  categoryId: {
    type: mongoose.Types.ObjectId,
    ref: "bookcategories",
  },
});
export default mongoose.model("book", bookSchema);
