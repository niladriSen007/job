import express from "express";
import { addToAppliedJob, fetchAppliedJobs } from "../controller/applyJobController.js";
const router = express.Router()

router.post("/addToApply",addToAppliedJob)
router.get("/myJobs",fetchAppliedJobs)

export default router