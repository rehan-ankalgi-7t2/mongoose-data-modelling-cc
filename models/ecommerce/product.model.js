import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'product name cannot be empty'],
    },
    price: {
      type: Number,
      required: [true, 'product price is required'],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
    stock: {
      type: Number,
      default: 0,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    image: {
      type: String,
    },
    summary: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
