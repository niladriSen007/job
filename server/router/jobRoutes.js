import express from 'express'
import { getAllJobs, postJob } from '../controller/jobController.js'
const router = express.Router()

router.get("/getJobs",getAllJobs)
router.post("/postJob",postJob)

export default router