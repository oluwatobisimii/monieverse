import { createSlice } from '@reduxjs/toolkit';
import { getUserProfile } from './userProfileAction';



const initialState = {
  user: {},
  isLoading: false,
  error: null,
  status: 'idle',
};

const userProfile = createSlice({
  name: 'productList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.status = "pending"
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.user = { ...action.payload.data };
        localStorage.setItem('user', JSON.stringify(state.user))
        state.isLoading = false;
        state.error = null;
        state.status = "fulfilled"
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        console.log(action.payload)
        state.status = "failed"
      });
  },
});

export default userProfile.reducer;