import axios from "../../../api/axios";

export const resendVerificationOtpCode = async (
  email,
  setErrors,
  setResendOtpVar,
  setToasterSuccess
) => {
  await axios
    .post("/resend-token", {
      scope: "verification",
      email: email,
    })
    .then((res) => {
      if (res.status === 200) {
        setErrors("");
        setResendOtpVar(false);
        setToasterSuccess("OTP sent! Check your email.");
        console.log(res.data);
      }
    })
    .catch((err) => {
      let errors = {};
      errors.token = err.response.data.errors;
      setErrors(errors);
      console.log(err.response.data);
    });
};

export const verifyUserByToken = async (
  otp,
  setSuccess,
  navigate,
  setErrorMsg,
  setPresentError
) => {
  console.log(otp);
  await axios
    .post("/users/verify-by-token", {
      code: otp,
      user_id: JSON.parse(sessionStorage.getItem("userInfo")).user_id,
    })
    .then((res) => {
      if (res.data.status) {
        setSuccess(res.data.status);
        navigate("/success-page");
        sessionStorage.clear();
      } else {
        setErrorMsg(res.data.message);
        setPresentError(true);
        setTimeout(() => {
          setPresentError(false);
          setErrorMsg("");
          return;
        }, 3000);
      }
    })
    .catch((err) => {
      console.log(err);
      setPresentError(true);
      if (err.response.status === 404) {
        setPresentError(true);
        setErrorMsg("Invalid Token, check your email and try again");
      }

      if (err.response.status === 409) {
        setErrorMsg(err.response.data.error);
      }
      setErrorMsg(err.response.data.errors);
      setPresentError(true);
    });
};
