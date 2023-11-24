import express from "express"
const app = express()
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"
import { connectDB } from "./database/connection.js"
import jobRouter from "./router/jobRoutes.js"

dotenv.config()




const PORT = 5000;
const MODE = "development";

//database connection
connectDB()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))




//defning routes
app.use("/jobs",jobRouter)


//listening to port
app.listen(PORT,()=>{
    console.log(`Server is running on ${MODE} mode and on port ${PORT}`)
})