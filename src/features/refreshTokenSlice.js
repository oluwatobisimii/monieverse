import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';


// Define the initial state
const initialState = {
  accessToken: null,
  refreshToken: null,
  isLoading: false,
  error: null,
};

// Create the refresh token async thunk
export const refreshAccessToken = createAsyncThunk(
  'refreshToken/refreshAccessToken',
  async (_, { getState, rejectWithValue }) => {

    const oldRefreshToken = JSON.parse(localStorage.getItem('refreshToken'))

    try {
      const response = await axios.post('/users/refresh-token', null, {
        headers: {
          'Content-Type': 'application/json',
          'AUTHORIZATION': `Bearer ${oldRefreshToken.token}`,
        },
      });
      console.log(response.data)
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data.data;

      // Save the new tokens in local storage
      localStorage.setItem('accessToken', JSON.stringify(newAccessToken));
      localStorage.setItem('refreshToken', JSON.stringify(newRefreshToken));

      return { accessToken: newAccessToken, refreshToken: newRefreshToken };
    } catch (error) {
      // Log out the user on error
      // You can dispatch an action to handle the logout process
      console.error('Error refreshing access token:', error);
      return rejectWithValue(error.response.data);
    }
  }
);

// Create the refresh token slice
const refreshTokenSlice = createSlice({
  name: 'refreshToken',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(refreshAccessToken.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(refreshAccessToken.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log(action.payload)
        // Log out the user on error
        // You can dispatch an action to handle the logout process
      });
  },
});

// Export the refresh token action and reducer
export default refreshTokenSlice.reducer;

