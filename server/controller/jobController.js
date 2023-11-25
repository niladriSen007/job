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


export const getJobById = async(req,res)=>{
  try{
    const {id} = req.params;
    const job = await JobDetails.findById(id)
    return res.json({job})
  }catch(e){

  }
}


export const editJob = async(req,res)=>{
  try{
    const {id} = req.params;
    const jobExistOrNot = await JobDetails.findById(id);
    const editedJob = await JobDetails.findByIdAndUpdate(id,req?.body,{new:true})
    return res.json({job:editedJob})

  }catch(e){
    console.log(e)
  }
}
