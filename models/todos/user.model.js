import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: [true, 'username cannot be uppercase letters'],
      unique: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'password is required!'],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
