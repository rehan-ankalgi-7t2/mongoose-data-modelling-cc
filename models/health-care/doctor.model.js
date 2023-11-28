import mongoose from 'mongoose';

const doctorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    worksInHospitals: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'hospital',
    },
    experienceInYears: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);
