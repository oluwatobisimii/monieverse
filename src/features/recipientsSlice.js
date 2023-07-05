import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from '../api/axios';
import { baseApiCall } from '../api/MakeApiCallswithHeader';


// Define the initial state
const initialState = {
  allRecipients: null,
  isLoading: false,
  error: null,
  status: 'idle',
};

// Create the refresh token async thunk
export const getAllRecipients = createAsyncThunk(
  'app/allRecipients',
  async (_, { rejectWithValue }) => {
    try {
      const response = await baseApiCall('/users/recipients');
      return response.data
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

// Create the refresh token slice
const allRecipientsSlice = createSlice({
  name: 'refreshToken',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllRecipients.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.status = "pending"
      })
      .addCase(getAllRecipients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allRecipients = action.payload
        state.status = "fulfilled"
      })
      .addCase(getAllRecipients.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.status = "failed"
        // Log out the user on error
        // You can dispatch an action to handle the logout process
      });
  },
});

// Export the refresh token action and reducer
export default allRecipientsSlice.reducer;

