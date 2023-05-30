import axios from "./axios"

export const resendOTP = async (email, ) => {
    await axios.post('/users/resend-token', {
        scope: 'verification',
        email: email
    }).then(res => {
        if (res.status === 200) {
            console.log(res.data)
        }
    }).catch(err => {
        let errors = {}
        errors.token = err.response.data.errors
        console.log(err.response.data)
        console.log(err)
    })
}