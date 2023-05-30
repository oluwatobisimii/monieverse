import { createAsyncThunk } from '@reduxjs/toolkit'
import { baseApiCall } from '../../api/MakeApiCallswithHeader'



export const getUserProfile = createAsyncThunk(
    'user/fetch',
    async (userInput, { rejectWithValue }) => {
        try {

            let response = await baseApiCall(
                `/users/profile`, 'GET', {}
            )
            return response


        } catch (error) {
            // return custom error message from backend if present
            // if (error.response && error.response.data.message) {
            //     return rejectWithValue(error.response.data.message)
            // } else {
            //     return rejectWithValue(error.message)
            // }
            return rejectWithValue(error)
        }
    }
)

