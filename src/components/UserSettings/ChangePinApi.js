import store from "../../app/store"
import { loginUser } from "../../features/loginActions"
import { baseApiCall } from "../../api/MakeApiCallswithHeader"



export const ChangePasswordApi = {}


ChangePasswordApi.checkLogin = async (userInput) => {
    try {
        const response = await store.dispatch(loginUser(userInput))
        return response
    } catch (error) {
        throw error; // Throw the error for handling in the form submit
    }
}

ChangePasswordApi.createPin = async (pin) => {

    try {
        const response = await baseApiCall('/users/settings/set-transaction-pin', "POST", {
            pin: pin
        })

        return response;


    } catch (error) {
        console.log(error)
    }

}

ChangePasswordApi.updatePassword = async (userInput) => {
    try {
        const response = await baseApiCall('/users/password', 'POST', userInput)
        return response
    } catch (error) {
        throw error
    }
}