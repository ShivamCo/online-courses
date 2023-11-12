import { courseModel } from "../model/courseModel.js"



import express from "express"
const router = express.Router()

router.get("/courses-enrolled/data", async (req, res) => {

   
    

    const { name, email } = req.query;

    const response = await courseModel.find({ 'students.email': email }) 
    res.json(response)

})

export { router as coursesEnrolled }