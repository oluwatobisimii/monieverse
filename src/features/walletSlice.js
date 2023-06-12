import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseApiCall } from '../api/MakeApiCallswithHeader';

// Define the initial state
const initialState = {
    wallets: [],
    loading: false,
    error: null,
    status: 'idle',
};


// Create the async thunk for fetching the wallets
export const fetchWallets = createAsyncThunk(
    'wallets/fetch',
    async (_, { getState, rejectWithValue }) => {
        try {
            const response = await baseApiCall('users/wallets', 'GET')
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
const walletSlice = createSlice({
    name: 'wallets',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Handle the pending state
        builder.addCase(fetchWallets.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.status = "pending"
        });

        // Handle the fulfilled state
        builder.addCase(fetchWallets.fulfilled, (state, action) => {
            state.loading = false;
            state.wallets = action.payload;
            state.error = null;
            state.status = "fulfilled"
        });

        // Handle the rejected state
        builder.addCase(fetchWallets.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.status = "failed"
        });
    },
});

// Export the async thunk and the wallet reducer

export default walletSlice.reducer;
