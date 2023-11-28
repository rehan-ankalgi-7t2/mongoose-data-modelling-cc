import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'username is required'],
      lowercase: true,
      unique: [true, 'username should be unique'],
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'password is required'],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
