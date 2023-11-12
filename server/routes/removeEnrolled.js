import { courseModel } from "../model/courseModel.js"



import express from "express"
const router = express.Router()




router.post( "/remove-enroll", async(req,res)=>{

    const studentInfo = req.body.data
    

    try {
        const response =  res.json(await courseModel.findOneAndUpdate(
            { courseName: studentInfo.course },
            { $push: { studentsCompleted: studentInfo.email  } }
            
          ))
        
    } catch (e){
        console.log(e)
        res.json("Unable to Enroll")
    }


} )

export {router as removeStudentEnrolled}