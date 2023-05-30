import store from "../app/store";
import { refreshAccessToken } from "../features/refreshTokenSlice";
import axios from "./axios";


// Wrapper function for making API calls with automatic token refreshing
export const baseApiCall = async (url, method, data, contentType = "application/json") => {
    // Get Token from Local Storage

    try {
        const accessToken = JSON.parse(localStorage.getItem('accessToken'))
        // Make the API call
        const response = await axios({
            method: method,
            url: url,
            data: data,
            headers: {
                'Authorization': `Bearer ${accessToken.token}`,
                'Content-Type': contentType,
            },
        });

        // Return the response data
        return response.data;
    } catch (error) {
        // Check if the error is due to an expired access token
        if (error.response && error.response.status === 401) {
            try {
                // Refresh the access token
                await store.dispatch(refreshAccessToken());

                const accessToken = JSON.parse(localStorage.getItem('accessToken'))
                // Update the headers with the new access token
                const response = await axios({
                    method: method,
                    url: url,
                    data: data,
                    headers: {
                        'Authorization': `Bearer ${accessToken.token}`,
                        'Content-Type': 'application/json',
                    },
                });

                // Return the response data
                return response.data;
            } catch (refreshError) {
                // Handle the error refreshing the token
                console.error('Error refreshing access token:', refreshError);
                throw refreshError; // Rethrow the error to be handled by the calling function
            }
        } else {
            // Handle other types of errors
            console.error('API call error:', error);
            throw error; // Rethrow the error to be handled by the calling function
        }
    }
};