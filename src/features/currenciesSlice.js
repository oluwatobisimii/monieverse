import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';


// Define the initial state
const initialState = {
  allCurrencies: null,
  isLoading: false,
  error: null,
  status: 'idle',
};

// Create the refresh token async thunk
export const getAllCurrencies = createAsyncThunk(
  'app/allCurrencies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/currencies');
      return response.data
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

// Create the refresh token slice
const allCurrenciesSlice = createSlice({
  name: 'refreshToken',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCurrencies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.status = "pending"
      })
      .addCase(getAllCurrencies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allCurrencies = action.payload.data
        localStorage.setItem('allCurrencies', JSON.stringify(action.payload.data));
        state.status = "fulfilled"
      })
      .addCase(getAllCurrencies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.status = "failed"
        // Log out the user on error
        // You can dispatch an action to handle the logout process
      });
  },
});

// Export the refresh token action and reducer
export default allCurrenciesSlice.reducer;

