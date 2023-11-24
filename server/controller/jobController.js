import { JobDetails } from "../models/jobDetails.js";

export const getAllJobs = async (req, res) => {
  try {
    const allJobs = await JobDetails.find();
    return res.json({ jobs: allJobs });
  } catch (e) {
    console.log(e);
  }
};

export const postJob = async (req, res) => {
  const {
    companyName,
    jobTitle,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    workType,
    employmentType,
    description,
  } = req?.body;
  try {
    const newJob = new JobDetails({
        companyName,
        jobTitle,
        companyLogo,
        minPrice,
        maxPrice,
        salaryType,
        jobLocation,
        postingDate,
        workType,
        employmentType,
        description,
    })
    await newJob.save();
    return res.json({ job: newJob });
  } catch (e) {
    console.log(e);
  }
};