import { courseModel } from "../model/courseModel.js"



import express from "express"
const router = express.Router()




router.post( "/student-enroll", async(req,res)=>{

    const studentInfo = req.body.data
    const courseID = studentInfo.course

    const student = {
        id:(studentInfo.name+(new Date())).trim(), 
        name:studentInfo.name , 
        email:studentInfo.email 
    }

    // res.json(await courseModel.updateOne({ _id: courseID } ,  {$push: {students:student} } ))

    try {
        const response =  res.json(await courseModel.updateOne({ _id: courseID } ,  {$push: {students:student} } ))
        console.log(response)
    } catch (e){
        console.log(e)
        res.json("Unable to Enroll")
    }


} )

export {router as studentEnroll}