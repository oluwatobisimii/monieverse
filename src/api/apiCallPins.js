import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import PinDialog from '../components/Inputs/PinDialog';
import axios from './axios';

// Custom PIN input component
// eslint-disable-next-line
function PinInput({ onPinEntered }) {
    const [pin, setPin] = useState('');

    const handlePinChange = event => {
        setPin(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        onPinEntered(pin);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your transaction PIN:
                <input type="password" value={pin} onChange={handlePinChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

// Function to handle API calls with transaction PIN
export async function makeApiCallWithTransactionPin(url, method, data, contentType = "application/json", xpin = "") {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'))
    try {
        const accessToken = JSON.parse(localStorage.getItem('accessToken'))


        const response = await axios(
            {
                method: method,
                url: url,
                data: data,
                headers: {
                    'Authorization': `Bearer ${accessToken.token}`,
                    'Content-Type': contentType,
                    // 'X-Pin': xpin
                },
            });

        return response

    } catch (error) {

        if (error.response && error.response.status === 428) {
            console.log('here')
            // Render custom PIN input component
            return new Promise(resolve => {
                const handlePinEntered = userEnteredPin => {
                    // Resend the request with transaction PIN
                    // options.headers['X-Pin'] = userEnteredPin;
                    axios(
                        {
                            method: method,
                            url: url,
                            data: data,
                            headers: {
                                'Authorization': `Bearer ${accessToken.token}`,
                                'Content-Type': contentType,
                                'X-Pin': userEnteredPin
                            },
                        })
                        .then(pinResponse => {
                            if (pinResponse.status === 200) {
                                // Successful response
                                return pinResponse.json();
                            } else if (pinResponse.status === 403) {
                                // Invalid PIN
                                alert('Invalid PIN. Please re-enter your transaction PIN.');
                                resolve(makeApiCallWithTransactionPin(url, method, data, contentType = "application/json", xpin = ""));
                            } else {
                                // Other error handling
                                throw new Error(`Request failed with status: ${pinResponse.status}`);
                            }
                        })
                        .then(data => resolve(data))
                        .catch(error => {
                            console.error('API request error:', error);
                            throw error;
                        });
                };

                ReactDOM.render(
                    <PinDialog onPinEntered={handlePinEntered} />,
                    document.getElementById('pin-input-container')
                );
            });
        } else {
            // Handle other non-PIN related responses

        }
        // Handle fetch or other errors
        // console.error('API request error:', error);
        // throw error;
    }
}
