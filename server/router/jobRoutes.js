import express from 'express'
import { getAllJobs, getJobById, postJob } from '../controller/jobController.js'
const router = express.Router()

router.get("/getJobs",getAllJobs)
router.post("/postJob",postJob)
router.get("/getJob/:id",getJobById)

export default router