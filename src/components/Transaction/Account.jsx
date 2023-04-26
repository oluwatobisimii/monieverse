import React from 'react'
import icon from "../../assets/icon.svg";

const Account = ({ type, name, initials, transactionDate }) => {
    let initialBackground;
    let initialColor;
    switch (type) {
      case "personal":
        initialBackground = "bg-primary-100";
        initialColor = "text-primary-500";
        break;
      case "business":
        initialBackground = "bg-green-100";
        initialColor = "text-green-500";
        break;
      case "swap":
        initialBackground = "bg-gray-50";
        break;
  
      default:
        break;
    }
    return (
      <div className="flex items-center gap-3">
        <div
          className={`h-10 w-10 rounded-full flex items-center justify-center ${initialBackground}`}
        >
          {type === "swap" ? (
            <img src={icon} alt="" />
          ) : (
            <p
              className={`text-sm text-gray-500 uppercase font-medium ${initialColor}`}
            >
              {initials}
            </p>
          )}
        </div>
        <div>
          <p className="text-sm text-gray-500">
            {" "}
            {type === "swap" ? "Swap to NGN" : name}
          </p>
          <div className="h-0.5" />
          <p className="lg:hidden text-sm text-gray-500">{transactionDate}</p>
        </div>
      </div>
    );
  };

export default Account