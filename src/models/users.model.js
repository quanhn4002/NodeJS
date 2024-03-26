import mongoose from "mongoose";

function validateEmail(textEmail) {
  return /^\S+@\S+\.\S+$/.test(textEmail);
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Không được để trống name"],
      // lowercase: true,
      trim: true,
      minLength: [2, "Cần nhập tối thiểu 2 kí tự"],
      maxLength: [20, "Tối đa chỉ được 20 kí tự"],
    },
    age: {
      type: Number,
      min: [1, "Tuổi phải lớn hơn 0"],
      max: [100, "Tuổi không được lớn hơn 100"],
    },
    email: {
      type: String,
      unique: [true, "đã tồn tại email"],
      validate: {
        validator: validateEmail,
        message: "Không đúng định dạng email",
      },
      require: [true, "Không được để trống email"],
    },
    gender: {
      type: Boolean,
      default: true,
    },
    password: {
      type: String,
      require: [true, "Không được để trống password"],
      minLength: [6, "Cần nhập tối thiểu 6 kí tự"],
    },
  },
  { timestamps: true } // tự động tạo thêm 2 trường createdAt và updatedAt
);
export default mongoose.model("users", userSchema);
