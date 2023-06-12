import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseApiCall } from '../api/MakeApiCallswithHeader';

// Define the initial state
const initialState = {
    kyc: {},
    loading: false,
    error: null,
    status: 'idle',
};


// Create the async thunk for fetching the wallets
export const getKyc = createAsyncThunk(
    'kyc/fetch',
    async (_, { getState, rejectWithValue }) => {
        try {
            const response = await baseApiCall('users/kyc', 'GET')
            console.log(response.data)
            // Return the wallets data
            return response.data;

        } catch (error) {
            // Handle any errors that occur during the request
            return rejectWithValue(error.response.data);
        }
    }
);

// Create the wallet slice
const kycStatusSlice = createSlice({
    name: 'wallets',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Handle the pending state
        builder.addCase(getKyc.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.status = "pending"
        });

        // Handle the fulfilled state
        builder.addCase(getKyc.fulfilled, (state, action) => {
            state.loading = false;
            state.kyc = action.payload;
            state.error = null;
            state.status = "fulfilled"
        });

        // Handle the rejected state
        builder.addCase(getKyc.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.status = "failed"
        });
    },
});

// Export the async thunk and the wallet reducer

export default kycStatusSlice.reducer;
