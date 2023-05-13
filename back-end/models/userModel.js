import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    balance: {
      type: Number,
      required: true,
      default: 0.0,
    },
    compliments: {
      type: Number,
    },
    warnings: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
const User = mongoose.model("User", userSchema);

export default User;
