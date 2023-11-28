import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quanitity: {
    type: Number,
    required: true,
    default: 1,
  },
});

const orderSchema = mongoose.Schema(
  {
    totalPrice: {
      type: Number,
      required: true,
    },
    orderItems: {
      type: [itemSchema],
    },
    address: {
      type: String,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    status: {
      type: String,
      enum: ['PENDING', 'CANCELLED', 'DELIVERED'],
      default: 'PENDING',
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
