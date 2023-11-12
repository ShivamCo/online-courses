import { configureStore } from '@reduxjs/toolkit';
import courseReducer from '../features/course/courseSlice.js'
import studentReducer from '../features/enrollSlice.js'
import enrolledReducer from '../features/enrolledSlice.js';
import removeStudentReducer from '../features/removeSlice.js';


const store = configureStore({
  reducer: {
    courses: courseReducer,
    data: studentReducer,
    enrolledData: enrolledReducer,
    removeStudent: removeStudentReducer
  },
});

export default store;