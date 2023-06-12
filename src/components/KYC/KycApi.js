import { baseApiCall } from "../../api/MakeApiCallswithHeader";


export const updateProfileKycAddress = async (userInput,
) => {

    try {
        const userProfileData = JSON.parse(localStorage.getItem('user'));

        const userData = {

            account_type: userProfileData.account_type,
            email: userProfileData.email,
            first_name: userProfileData.first_name,
            last_name: userProfileData.last_name,
            phone: userProfileData.phone,
            business_name: userProfileData.business_name,
            country_code: userProfileData.country_code,
            ...userInput
        };

        const response = await baseApiCall('/users/profile', 'PATCH', userData);
        console.log(response);

        if (response.status === 'OK') {
            return response.status; // Return the response if successful
        } else {
            throw new Error(response); // Throw an error if not successful
        }
    } catch (error) {
        console.error(error);
        throw error; // Throw the error for handling in the form submit
    }
}




export const uploadDocuments = async (front, back, documentType, setLoading, setStep, setError, navigate) => {
    setLoading(true)
    const formData = new FormData();
    if (front) {
        formData.append('file', front, front.name);
    }
    if (back) {
        formData.append('file', back, back.name);
    }

    formData.append('document_type', documentType);


    await baseApiCall('/users/uploads/identity-document', "POST", formData, "multipart/form-data").then(res => {
        console.log(res)
        setLoading(false)
        if (res.status === 'OK') {
            setStep(4)
            
        }

    }).catch(err => {
        console.log(err)
        setLoading(false)
        if (err.response.status === 400) {
            setError(err.response.data.message)
            console.log(err.response.data.errors)
        }
    })

}


export const createPin = async (pin) => {

    try {
        const response = await baseApiCall('/users/settings/set-transaction-pin', "POST", {
            pin: pin
        })

        return response;


    } catch (error) {
        console.log(error)
    }

}