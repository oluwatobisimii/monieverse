import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';


export const submitPinDialog = createAsyncThunk('api/submitPinDialog', async (pin, thunkAPI) => {
    try {
        const accessToken = JSON.parse(localStorage.getItem('accessToken'));
        const { url, method, data, contentType } = JSON.parse(localStorage.getItem('apiCallParams'));

        const response = await axios({
            method: method,
            url: url,
            data: data,
            headers: {
                'Authorization': `Bearer ${accessToken.token}`,
                'Content-Type': contentType || 'application/json',
                'X-Pin': pin,
            },
        });

        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 403) {
            // Pop up the enter pin modal again for wrong pin
            const enterPinDiv = document.getElementById('enterPinDiv');
            enterPinDiv.classList.remove('hidden');
        }

        throw error;
    }
});


const initialState = {
    response: null,
    loading: false,
    error: null,
};

const pinApiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(submitPinDialog.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(submitPinDialog.fulfilled, (state, action) => {
                state.response = action.payload;
                state.loading = false;
            })
            .addCase(submitPinDialog.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    },
});

export default pinApiSlice.reducer;
