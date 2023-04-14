import React from 'react'
import info from "../../assets/icons/Info.svg";

const RateWarning = () => {
    return (
      <div className="rounded-2xl px-4 py-3 bg-yellow-100 flex gap-2 items-start">
        <img src={info} alt="" className="mt-1" />
        <p className="text-yellow-600">
          Please note that sending through swift includes an added{" "}
          <span className="font-medium">2.55 USD</span> charge and may take{" "}
          <span className="font-medium">3 - 5 days</span> longer. Depending on the
          banks involved, extra charges maybe added.
        </p>
      </div>
    );
  };

export default RateWarning