
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  data: null,
  status: 'idle',
  error: null,
};


const removeStudentData = createAsyncThunk('data/postData', async (data) => {
  const response = await axios.post('http://localhost:5000/remove-enroll', data);
  return response.data;
});


const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(removeStudentData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeStudentData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(removeStudentData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the async thunk for use in components
export { removeStudentData };

// Export the reducer
export default dataSlice.reducer;
