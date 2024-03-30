import mongoose from "mongoose";
const uploadSchema = new mongoose.Schema({
  image: {
    type: String,
  },
});
export default mongoose.model("upload", uploadSchema);
