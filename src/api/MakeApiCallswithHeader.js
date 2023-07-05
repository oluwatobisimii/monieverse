import axios from "./axios";
import store from '../app/store'
import { logoutUser } from "../features/logoutSlice";

export const baseApiCall = async (url, method, data, contentType = "application/json", xpin = "") => {
    localStorage.setItem('apiCallParams', JSON.stringify({ url, method, data, contentType }));
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
                // 'X-Pin': xpin
            },
        });

        // Clear the API call parameters from localStorage on success
        localStorage.removeItem('apiCallParams');

        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 428) {
            console.log(error.response && error.response.status === 428)
            
            // Toggle the enter pin div by removing 'hidden'
            const enterPinDiv = document.getElementById('enterPinDiv');
            enterPinDiv.classList.remove('hidden');
            return
        }

        if (error.response && error.response.status === 401) {
            console.log('here')
            store.dispatch(logoutUser())
        }
        localStorage.removeItem('apiCallParams');
        console.error('API call error:', error);
        throw error;

    }
};






// const wrapApiCall = async (url, method, params) => {
//     // Save the parameters for the API call in localStorage
//     localStorage.setItem('apiCallParams', JSON.stringify({ url, method, params }));

//     try {
//         const response = await axios({
//             url,
//             method,
//             data: params,
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//             },
//         });
//         return response.data;
//     } catch (error) {
//         if (error.response && error.response.status === 428) {
//             // Toggle the enter pin div by removing 'hidden'
//             const enterPinDiv = document.getElementById('enterPinDiv');
//             enterPinDiv.classList.remove('hidden');
//           }

//         throw error;
//     }
// };

// export default wrapApiCall;



