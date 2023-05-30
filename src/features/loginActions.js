import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../api/axios'



export const loginUser = createAsyncThunk(
    'auth/login',
    async (userInput, { rejectWithValue }) => {

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            let response = await axios.post(
                `/users/login`,
                userInput,
                config
            )
            return response

        } catch (err) {

            return rejectWithValue(err.response.data.errors)

        }
    }
)

