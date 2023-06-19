import axios from "./axios";

// Wrapper function for making API calls with automatic token refreshing
export const baseApiCall = async (url, method, data, contentType = "application/json", xpin = "") => {
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
        return response.data;
    } catch (error) {
        console.error('API call error:', error);
        throw error;

    }
};





// Wrapper function for making API calls with automatic token refreshing
// export const baseApiCall = async (url, method, data, contentType = "application/json") => {
//   try {
//     const accessToken = JSON.parse(localStorage.getItem('accessToken'));

//     // Make the initial API call
//     const response = await axios({
//       method: method,
//       url: url,
//       data: data,
//       headers: {
//         'Authorization': `Bearer ${accessToken.token}`,
//         'Content-Type': contentType,
//       },
//     });

//     // Check for 428 Precondition Required response
//     if (response.status === 428) {
//       const pin = prompt('Please enter your PIN:');
//       if (pin) {
//         // Retry the API call with the PIN in the header
//         const pinResponse = await axios({
//           method: method,
//           url: url,
//           data: data,
//           headers: {
//             'Authorization': `Bearer ${accessToken.token}`,
//             'Content-Type': contentType,
//             'X-Pin': pin,
//           },
//         });

//         // Check for 403 Forbidden response after adding the PIN
//         if (pinResponse.status === 403) {
//           const newPin = prompt('Incorrect PIN. Please re-enter your PIN:');
//           if (newPin) {
//             // Retry the API call with the new PIN
//             return baseApiCall(url, method, data, contentType);
//           } else {
//             throw new Error('PIN entry canceled. Aborting API call.');
//           }
//         }

//         // Return the response if the PIN was successfully added
//         return pinResponse.data;
//       } else {
//         throw new Error('PIN entry canceled. Aborting API call.');
//       }
//     }

//     // Return the response for other status codes
//     return response.data;
//   } catch (error) {
//     console.error('API call error:', error);
//     throw error;
//   }
// };



