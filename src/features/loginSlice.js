import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './loginActions';

const initialState = {
    user: null,
    isLoading: false,
    errors: {},
    success: false
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers:

    {
        [loginUser.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
        },

        [loginUser.fulfilled]: (state, { payload }) => {
            state.user = payload;
            state.success = true
            state.isLoading = false;
            state.error = null;
            localStorage.setItem("accessToken", JSON.stringify(payload.data.data.accessToken))
            localStorage.setItem("refreshToken", JSON.stringify(payload.data.data.refreshToken))
        },

        [loginUser.rejected]: (state, { payload }) => {
            console.log(payload)
            state.isLoading = false;
            state.errors.error = payload;
            state.errors.date = Date.now()


        }
    }
})


export default loginSlice.reducer;