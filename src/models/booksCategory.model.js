import mongoose from "mongoose";
const bookcateSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Không được để trống "],
  },
});
export default mongoose.model("bookcategories", bookcateSchema);
