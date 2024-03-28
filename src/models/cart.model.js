import mongoose from "mongoose";
const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    item: [
      {
        productId: {
          type: mongoose.Types.ObjectId,
          ref: "products",
        },
        quantily: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);
export default mongoose.model("Cart", cartSchema);
