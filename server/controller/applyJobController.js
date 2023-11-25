import { AppliedJobDetails } from "../models/appliedJobs.js";

export const addToAppliedJob = async (req, res) => {
  try {
    console.log(req.body);
    // const {job} = req.body;
    const { jobId, userId } = req?.body;
    const newAppliedJob = new AppliedJobDetails({
      jobId,
      userId,
    });
    await newAppliedJob.save();
    return res.json({ jobs: newAppliedJob });
  } catch (e) {
    console.log(e);
  }
};

export const fetchAppliedJobs = async (req, res) => {
  try {
    const appliedJobs = await AppliedJobDetails.find();
    return res.json({ jobs: appliedJobs });
  } catch (e) {
    console.log(e);
  }
};
