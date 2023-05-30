import React, { useEffect, useState } from "react";
import "@lottiefiles/lottie-player";
import { Link, useLocation } from "react-router-dom";
import FlowNav from "../NavBar/FlowNav";

const SuccessfulAction = () => {
  const location = useLocation();
  const { state } = location;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [buttonLabel, setButtonLabel] = useState("");
  const [to, setTo] = useState("/login");
  

  useEffect(() => {
    if (state) {
      const { to, title, description, buttonLabel } = state;
      setTitle(title);
      setDescription(description);
      setButtonLabel(buttonLabel);
      setTo(to);
      console.log(to);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-gray-50 h-screen">
      <FlowNav />
      <div className="h-10"></div>
      <div className=" md:rounded-3xl overflow-hidden relative font-inter max-w-[640px] bg-gray-0 lg:max-h-[630px] flex-1 mx-auto ">
        <div className="flex flex-col p-4 md:px-10 md:pb-10 md:pt-[100px] md:h-[630px] relative z-10">
          <div className="mx-auto">
            <lottie-player
              autoplay="true"
              loop="true"
              mode="normal"
              style={{ width: "200px", height: "200px" }}
              src="https://assets9.lottiefiles.com/packages/lf20_R09JykuodG.json"
            />
          </div>
          <div className="h-6"> </div>
          <p className="text-d-md text-[#101828] text-center font-clashGrotesk font-medium">
            {title || "Account Created!"}
          </p>
          <div className="h-2"> </div>
          <p className="text-md text-[#4B5565] font-inter text-center max-w-[350px] mx-auto">
            {description || "You can start moving money seamlessly."}
          </p>

          <Link
            to={to}
            className=" rounded-xl mt-auto bg-primary-400 text-gray-0 w-full h-14 text-center flex center"
          >
            {buttonLabel || "Proceed to login"}
          </Link>
        </div>

        {/* Gradient background */}
        <div className="monie-gradient absolute top-0 h-[141px] w-full z-0" />
      </div>
    </div>
  );
};

export default SuccessfulAction;
