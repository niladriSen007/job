import express from 'express'
import { editJob, getAllJobs, getJobById, postJob } from '../controller/jobController.js'
const router = express.Router()

router.get("/getJobs",getAllJobs)
router.post("/postJob",postJob)
router.put("/editJob/:id",editJob)
router.get("/getJob/:id",getJobById)

export default router