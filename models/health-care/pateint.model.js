import mongoose from 'mongoose';

const patientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagnosedWith: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    },
    gender: {
      type: String,
      enum: ['M', 'F', 'O'],
    },
    addmittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model('Patient', patientSchema);
