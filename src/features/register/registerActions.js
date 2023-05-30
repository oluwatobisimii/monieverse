import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../api/axios'



export const registerUser = createAsyncThunk(
    'user/register',
    async (userInput, { rejectWithValue }) => {
console.log(userInput)
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            let response = await axios.post(
                `/users/create`,
                userInput,
                config
            )
            return response

        } catch (error) {
            // console.log(error.response.data)
            // return custom error message from backend if present
            if (error?.response && error?.response.data.message) {
                return rejectWithValue(error?.response.data)
            } else {
                return rejectWithValue(error?.response.data)
            }
        }
    }
)

