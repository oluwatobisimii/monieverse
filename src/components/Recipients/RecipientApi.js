import { baseApiCall } from "../../api/MakeApiCallswithHeader"
// import { makeApiCallWithTransactionPin } from "../../api/apiCallPins"



export const CreateRecipient = async (currencyCode, scheme, userInput) => {
    try {
        const response = await baseApiCall(`/users/recipients/${currencyCode}/${scheme}`, 'POST', userInput)
        return response.data
    } catch (error) {
    console.log(error.response)
    }

}

