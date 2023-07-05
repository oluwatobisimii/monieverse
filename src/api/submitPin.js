import axios from "./axios";

const submitPinDialog = async (pin) => {

  const enterPinDiv = document.getElementById('enterPinDiv');
  enterPinDiv.classList.add('hidden');

  // Retrieve the API call parameters from localStorage
  const { url, method, data, contentType } = JSON.parse(localStorage.getItem('apiCallParams'));

  // Add the entered pin to the X-Pin header
  // const headers = {
  //   'X-Pin': pin,
  //   Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  // };

  try {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'))
    const response = await axios({
      method: method,
      url: url,
      data: data,
      headers: {
        'Authorization': `Bearer ${accessToken.token}`,
        'Content-Type': contentType || "application/json",
        'X-Pin': pin,
      },
    });

    // Clear the API call parameters from localStorage on success
    localStorage.removeItem('apiCallParams');
    console.log(response.data)
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 403) {
      // Pop up the enter pin modal again for wrong pin
      const enterPinDiv = document.getElementById('enterPinDiv');
      enterPinDiv.classList.remove('hidden');
    }

    throw error;
  }
};

export default submitPinDialog;