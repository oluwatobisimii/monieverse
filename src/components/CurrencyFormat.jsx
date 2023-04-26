import React from "react";

const CurrencyFormat = ({ currency, balance = 0, mainStyle="text-d-md lg:text-d-lg", unitStyle="text-d-xs lg:text-d-sm" }) => {
  //   Currency Formatting
  let moneyInput = Number(balance) * 100;
  let wholeNumber = Math.floor(moneyInput / 100);
  let main = Intl.NumberFormat().format(wholeNumber);
  let kobo = moneyInput - wholeNumber * 100;

  let currencysymbol;

  switch (currency) {
    case "Nigeria":
      currencysymbol = "₦";
      
      break;
    case "Europe":
      currencysymbol = "€"
      break;
    case "India":
      currencysymbol = "₹";
      
      break;
    case "Japan":
      currencysymbol = "¥";
      
      break;
    case "China":
      currencysymbol = "¥";
      
      break;
    case "UK":
      currencysymbol = "£";
      
      break;
    case "USA":
      currencysymbol = "$";
      
      break;
    default:
    // code block
  }

  return (
    <div>
      {/* Number(wholeNumber[1])  */}
      <div className="flex items-baseline font-clashGrotesk">
        <p className={`${mainStyle} font-medium uppercase text-gray-600 `}>
          {currencysymbol}
          <span>{main}</span>
        </p>
        <p className={`${unitStyle} font-medium uppercase text-gray-400 font-clashGrotesk"`}>
          .
          {kobo.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          }) || "00"}
        </p>
      </div>
    </div>
  );
};

export default CurrencyFormat;
