import { baseApiCall } from "../../api/MakeApiCallswithHeader";

export const updateProfileKyc = async (countryShortName,
    state,
    address,
    city,
    zipcode,
    bvn, setStep) => {
    console.log(state)
    const userProfileData = JSON.parse(localStorage.getItem('user'))
    console.log(countryShortName)


    const userInput =
    {
        address: address,
        city: city,
        state: state,
        zipcode: zipcode,
        bvn: bvn,
        account_type: "Personal",
        email: userProfileData.email,
        first_name: userProfileData.first_name,
        last_name: userProfileData.last_name,
        phone: userProfileData.phone,
        business_name: userProfileData.business_name,
        "country_code": countryShortName,
    }

    await baseApiCall('/users/profile', "PATCH", userInput).then(res => {
        console.log(res)
        console.log(res.status)
        if (res.status === 'OK') {
            setStep(1)
        }
    }).catch(err => {
        console.log(err)
        if (err.response.status === 422) {
            console.log(err.response.data.errors)
        }
    })
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
        if (res.status === 200) {
            if (res.status === 'OK') {
                navigate('/success-page', {
                    state: {
                        to: "/",
                        title: "Verification in Progress",
                        description: "We’ll let you know once your documents have been verified.",
                        buttonLabel: "Return Home",
                    }
                })
            }
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