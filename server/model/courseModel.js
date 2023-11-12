import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({

    courseName: String,
    instructor: String,
    description: String,
    enrollmentStatus: String,
    thumbnail: String,
    duration: String,
    schedule: String,
    location: String,
    prerequisites: Array,
    syllabus: Array,
    students: Array


})

export const courseModel = mongoose.model('courseModel', courseSchema)