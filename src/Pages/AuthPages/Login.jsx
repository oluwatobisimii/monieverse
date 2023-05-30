import React, { useRef, useState, useEffect } from "react";
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

const Login = () => {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

  const userRef = useRef();
  
  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [errMsg, setErrMsg] = useState("");

  // eslint-disable-next-line
  
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [identity, password]);

  const { isLoading, errors } = useSelector((state) => state.login);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    const result = await dispatch(loginUser({ identity, password }))
      .then(({ payload }) => {
        console.log(payload);
        if (payload === "account not active") {
          navigate("/register", {
            state: { stepRoute: 2, emailRoute: identity },
          });
          return;
        }
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data);
        console.log(err.response.data.errors);
        if (!err?.response) {
          setErrMsg("No server response try again");
        } else if (err.response?.status === 400) {
          setErrMsg("Missing Username or Password");
        } else if (err.response?.status === 401) {
          setErrMsg("Unauthorized");
        } else {
          setErrMsg("Login Failed");
        }
      });
  };

  return (
    <section className="flex h-screen w-full font-inter">
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
            <input
              ref={userRef}
              type={"email"}
              name={"email"}
              placeholder="Enter your email address"
              className="border border-gray-100  px-4 py-3 rounded-lg focus:outline-none focus:border-primary-400 placeholder:text-md placeholder:text-grey-400 disabled:bg-gray-25 text-gray-600
              focus:shadow-[0px_0px_0px_3px_#DDD7FE] font-inter  w-full"
              onChange={(e) => {
                setIdentity(e.target.value);
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
          {errors && (
            <p className="text-center text-error-400 text-xs">{errors}</p>
          )}
          <div className="h-16" />
          <button
            className="w-full h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl"
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
          <button
            className="w-full flex h-14  text-center text-gray-500 text-md font-medium rounded-xl border border-gray-100 items-center justify-center gap-2"
            // onClick={handleLogin}
          >
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
    </section>
  );
};

export default Login;
