import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from './registerActions'

const initialState = {
    loading: false,
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    errors: null,
    userInput: {},
    success: false, // for monitoring the registration process.

}

const registerSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateUserInput: (state, { payload }) => {
            const prevInput = JSON.parse(sessionStorage.getItem('userInput'))
            if (Object.keys(payload).length > 0) {
                state.userInput = { ...state.userInput, ...prevInput, ...payload }
            }
            else {
                state.userInput = {}
            }

            sessionStorage.setItem("userInput", JSON.stringify(state.userInput))
        },

        resetErrors: (state, { payload }) =>{
            state.errors ={...state.errors}
            state.errors[payload]=''
        }
    },
    extraReducers: {
        // register user
        [registerUser.pending]: (state) => {
            state.loading = true
            state.error = null
            state.errors = ''
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.errors = ''
            state.success = true // registration successful
            state.userInfo = payload.data.data
            sessionStorage.setItem("userInfo", JSON.stringify(payload.data.data))
        },
        [registerUser.rejected]: (state, { payload }) => {
            console.log(payload.errors)
            state.loading = false
            state.errors = payload.errors
        },

    },

})

export const { updateUserInput, resetErrors } = registerSlice.actions

export default registerSlice.reducer