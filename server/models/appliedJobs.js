import mongoose from "mongoose";

const appliedJobSchema = new mongoose.Schema(
  {
    jobId: {
      type: String,
      required: true,
    },
    userId:{
        type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export const AppliedJobDetails = mongoose.model(
  "AppliedJobDetail",
  appliedJobSchema
);
