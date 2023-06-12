import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';
import { logoutUser } from './logoutSlice';


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
  async (_, { dispatch, getState, rejectWithValue }) => {

    const oldRefreshToken = JSON.parse(localStorage.getItem('refreshToken'))

    try {
      const response = await axios.post('/users/refresh-token', {}, {
        headers: {
          'Content-Type': 'application/json',
          'AUTHORIZATION': `Bearer ${oldRefreshToken.token}`,
        },
      });

      // Save the new tokens in local storage
      localStorage.setItem('accessToken', JSON.stringify(response.data.data.accessToken));
      localStorage.setItem('refreshToken', JSON.stringify(response.data.data.refreshToken));
      return response.data.data
    } catch (error) {
      console.error('Error refreshing access token:', error);
      console.log(error.response)
      if (error.response.status === 401) {
        console.log('refreshAccess token has expired')
        dispatch(logoutUser())
      }
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

        // Log out the user on error

        // You can dispatch an action to handle the logout process
      });
  },
});

// Export the refresh token action and reducer
export default refreshTokenSlice.reducer;

