import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  data: null,
  status: 'idle',
  error: null,
};


const studentData = createAsyncThunk('data/postData', async (data) => {
  const response = await axios.post('http://localhost:5000/student-enroll', data);
  return response.data;
});


const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(studentData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(studentData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(studentData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export { studentData };


export default dataSlice.reducer;