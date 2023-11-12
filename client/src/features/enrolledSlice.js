import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  data: null,
  status: 'idle',
  error: null,
};


const enrolledData = createAsyncThunk('data/fetchData', async (requestData) => {
  const response = await axios.get('http://localhost:5000/courses-enrolled/data', {
    params: requestData,
    
  });
  return response.data;
});



const enrolledSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(enrolledData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(enrolledData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(enrolledData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export { enrolledData };


export default enrolledSlice.reducer;