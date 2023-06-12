import React, {useState, useEffect } from "react";
import logo from "../../assets/logo/logo-lg.svg";
import { Link } from "react-router-dom";

import info from "../../assets/icons/Info-tooltip.svg";
import google from "../../assets/icons/GOOGLE_ICON.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SwitchInput from "../../components/Inputs/SwitchInput";
import { loginUser } from "../../features/loginActions";
import PasswordInput from "../../components/Inputs/PasswordInput";
import Spinner from "../../components/Loaders/Spinner";
import { WarningOctagon, X } from "phosphor-react";
import { motion } from "framer-motion";
import CustomInput from "../../components/Inputs/CustomInput";
import { resendOTP } from "../../api/resendOTP";

const Login = () => {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

// eslint-disable-next-line
  const [identity, setIdentity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorObj, setErrorObj] = useState({});
  const [toasterError, setToasterError] = useState("");
  const [showToaster, setShowToaster] = useState(false);
  // eslint-disable-next-line
  const [errMsg, setErrMsg] = useState("");

  // eslint-disable-next-line
  const dispatch = useDispatch();

  useEffect(() => {
    setErrMsg("");
  }, [identity, password]);

  const { isLoading, errors } = useSelector((state) => state.login);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    const result = await dispatch(
      loginUser({
        identity: email !== "" ? email : "",
        password,
      })
    )
      .then(({ payload }) => {
        if (payload === "account not active") {
          const result = resendOTP(identity);
          console.log(result);
          navigate("/register", {
            state: { stepRoute: 2, emailRoute: identity },
          });
          return;
        }

        if (
          payload.status === 200 &&
          payload.data.message === "login successful"
        ) {
          console.log("done and navigate");
          navigate("/");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
        // console.log(err.response.data);
        // console.log(err.response.data.errors);
        if (err.message === "Network Error") {
          setErrMsg("Check your Network and try again");
        }
        if (!err?.response) {
          setErrMsg("No server response try again");
        } else if (err.response?.status === 400) {
          setErrMsg("Missing Username or Password");
          console.log("error");
        } else if (err.response?.status === 401) {
          setErrMsg("Unauthorized");
        } else {
          setErrMsg("Login Failed");
        }
      });
  };

  useEffect(() => {
    if (errors?.error === "user not found") {
      setShowToaster(true);
      setToasterError("We couldn't find a user with the provided information.");
      let newErrorObj = { email: "user not found" };
      setErrorObj({ ...newErrorObj });
      return;
    }

    if (errors?.error === "invalid credential") {
      setShowToaster(true);
      setToasterError("Invalid credentials entered, please confirm details.");
      let newErrorObj = {
        password: "Please double-check your password and try again",
      };
      setErrorObj({ ...newErrorObj });
      return;
    }

    if (toasterError !== null && toasterError !== "") {
      setShowToaster(true);
    }

    setToasterError(errors?.error);
    // eslint-disable-next-line
  }, [errors]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: "0.25" }}
      className="flex h-screen w-full font-inter relative"
    >
      {showToaster && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className=" absolute md:left-1/2 md:-translate-x-1/2
    shadow-[0px_4px_6px_-2px_#1018280D,_0px_12px_16px_-4px_#1018281A] p-4 md:w-[546px] bg-gray-0 top-10 rounded-lg overflow-hidden flex justify-between
    "
        >
          <div className="absolute w-20 h-0.5 bg-primary-300 bottom-0 left-0"></div>
          <div className="flex items-center gap-2">
            <WarningOctagon
              size={20}
              weight="duotone"
              className="text-error-500"
            />
            <p className="text-gray-500 text-xs md:text-md font-medium">
              {/* {errors === "user not found"
                ? "We couldn't find a user with the provided information."
                : errors === "invalid credential"
                ? "Invalid credentials entered, please confirm details."
                : errors} */}
              {toasterError}
            </p>
          </div>
          <div
            className="p-2 rounded-md border border-gray-200 hover:bg-gray-25"
            onClick={() => {
              setShowToaster(false);
            }}
          >
            <X />
          </div>
        </motion.div>
      )}

      <div className="flex-1 ">
        <div className="h-10 lg:h-14" />
        <img src={logo} alt="" className="mx-auto" />
        <div className="h-12 lg:h-[88px]" />
        <p className="text-center text-gray-600 text-d-xs lg:text-d-md font-clashGrotesk font-medium">
          Welcome Back
        </p>
        <div className="h-1" />
        <p className="text-sm lg:text-md text-gray-400 text-center">
          Don’t have an account?{" "}
          <span className="font-medium text-primary-500 underline">
            <Link to="/register">Create Account</Link>
          </span>
        </p>
        <div className="h-10" />
        <form action="" className="mx-auto max-w-[432px] p-4">
          <div className="w-full">
            <label
              htmlFor={"email"}
              className="text-gray-500 text-sm font-inter font-medium flex items-center justify-between gap-2"
            >
              <p> Email </p>
              <p>Use phone number </p>
            </label>

            <div className="h-1" />
            <CustomInput
              type={"email"}
              name={"email"}
              errors={errorObj}
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="h-1" />
            {<p className="text-xs font-medium text-error-400">{}</p>}
          </div>
          <div className="h-6" />

          <PasswordInput
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            errors={errorObj}
          />
          <div className="h-6" />
          <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
              <SwitchInput value={rememberMe} setValue={setRememberMe} />
              <div className="flex gap-2 items-center">
                <p>Remember me</p>
                <img src={info} alt="" />
              </div>
            </div>
            <span className="font-medium text-primary-500 underline">
              <Link to="/forgot-password">Forgot password?</Link>
            </span>
          </div>
          <div className="h-6" />

          <div className="h-16" />
          <button
            disabled={email === "" || password === ""}
            className="w-full h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl disabled:bg-primary-300 disabled:cursor-not-allowed"
            onClick={handleSubmit}
          >
            {isLoading ? <Spinner /> : "Login"}
          </button>

          <div className="h-6" />
          <div className="flex items-center gap-x-2">
            <div className="h-[1px] flex-1 bg-gray-100" />
            <p className="text-sm text-gray-400">Or</p>
            <div className="h-[1px] flex-1 bg-gray-100" />
          </div>
          <div className="h-6" />
          <button className="w-full flex h-14  text-center text-gray-500 text-md font-medium rounded-xl border border-gray-100 items-center justify-center gap-2">
            <img src={google} alt="" />
            <p>Continue with Google</p>
          </button>
        </form>

        <div className="h-16" />
        <p className="text-center text-gray-300 text-xs">
          Monieverse Microfinance Bank Limited © 2023{" "}
        </p>
      </div>
      <div className="bg-gray-50 flex-1 hidden lg:block"></div>
    </motion.section>
  );
};

export default Login;
