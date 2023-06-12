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
        return response.data;
    } catch (error) {
        console.error('API call error:', error);
        throw error;

    }
};