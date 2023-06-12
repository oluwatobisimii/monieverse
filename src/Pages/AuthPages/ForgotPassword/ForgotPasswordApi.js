import axios from "../../../api/axios";

export const sendToken = async (email, setStep, setErrors) => {
    await
        axios.post('/users/forgot-password', { email: email })
            .then((res) => {
                if (res.status === 200) {
                    setStep(1)
                }
                console.log(res)
            }).catch(err => {

                let errors = {}
                errors.email = err.response.data.errors

                setErrors(errors)
                console.log(err.response.data.errors)
            })
}

export const verifyToken = async (email, otp, setStep, setErrors) => {
    if (otp.length === 6) {
        await axios.post('users/tokens/check', { email: email, code: otp }).then(res => {
            if (res.status === 200) {
                console.log(res.data)
                sessionStorage.setItem('forgotPasswordToken', res.data.data.token)
                setStep(2)
            }
        }).catch(err => {
            let errors = {}
            errors.token = err.response.data.errors
            setErrors(errors)
            console.log(err.response.data)
        })
    }
}

export const resendOtpCode = async (email, setErrors) => {
    try {
        const response = await axios.post('/resend-token', {
            scope: 'verification',
            email: email
        })

        if (response.status === 200) {
            console.log(response.data)
            return response.data;
        }
    } catch (err) {

        let errors = {}
        errors.token = err.response.data.errors
        setErrors(errors)
        console.log(err.response.data)
    }





}


export const updatePassword = async (password, confirmPassword, setErrors, navigate) => {
    const forgotPasswordToken = sessionStorage.getItem('forgotPasswordToken')

    await axios.post(`/users/reset-password?token=${forgotPasswordToken}`, {
        password: password,
        confirm_password: confirmPassword
    }).then(res => {
        if (res.status === 200) {
            console.log(res.data)
            sessionStorage.clear();
            navigate('/success-page', {
                state: {
                    to: "/login",
                    title: "Password Changed!",
                    description: "Access to your account has been restored.",
                    buttonLabel: "Back to login",
                }
            })
        }
    }).catch(err => {
        let errors
        errors = err.response.data.errors
        setErrors(errors)
        console.log(err.response.data)
    })

}