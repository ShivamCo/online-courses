import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import 'dotenv/config'
import cors from "cors"

import { allCourseData } from "./routes/allCourseData.js";
import { studentEnroll } from "./routes/studentEnroll.js";
import { coursesEnrolled } from "./routes/enrolledCourses.js";
import { removeStudentEnrolled } from "./routes/removeEnrolled.js";


const app = express()
const PORT = process.env.SERVER_PORT || 5000
const MONGODB = process.env.MONGODB

app.use(cors());
mongoose.connect(MONGODB);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())





app.use("/", allCourseData)
app.use("/", studentEnroll)
app.use("/", coursesEnrolled)
app.use("/", removeStudentEnrolled)

app.listen(PORT, () => {
   console.log( `Server is Live on ${PORT}`)
})