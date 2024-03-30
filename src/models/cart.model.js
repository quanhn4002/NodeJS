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
        quantity: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("cart", cartSchema);
