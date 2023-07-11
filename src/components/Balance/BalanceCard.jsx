import Nigeria from "../../assets/countries/Country = Nigeria.svg";
import Europe from "../../assets/countries/Country = Europe.svg";
import India from "../../assets/countries/Country = India.svg";
import China from "../../assets/countries/Country = China.svg";
import Japan from "../../assets/countries/Country = Japan.svg";
import UK from "../../assets/countries/Country = UK.svg";
import USA from "../../assets/countries/Country = USA.svg";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

const BalanceCard = ({
  currency,
  balance = 0,
  framerKey,
  kycStatus,
  toggleKycOverlay,
  currency_id,
}) => {
  const navigate = useNavigate();
  //   Currency Formatting
  let moneyInput = Number(balance) * 100;
  let wholeNumber = Math.floor(moneyInput / 100);
  let main = Intl.NumberFormat().format(wholeNumber);
  let kobo = moneyInput - wholeNumber * 100;

  let currencyImg;
  let currencysymbol;
  let currencyName;

  switch (currency) {
    case "Nigeria Naira":
      currencyImg = Nigeria;
      currencysymbol = "₦";
      currencyName = "Nigerian Naira";
      break;
    case "Euro":
      currencyImg = Europe;
      currencysymbol = "€";
      currencyName = "Euro";
      break;
    case "India":
      currencyImg = India;
      currencysymbol = "₹";
      currencyName = "Indian Rupee";
      break;
    case "Japan":
      currencyImg = Japan;
      currencysymbol = "¥";
      currencyName = "Japanese Yen";
      break;
    case "China":
      currencyImg = China;
      currencysymbol = "¥";
      currencyName = "Chinese Yuan";
      break;
    case "Pound Sterling":
      currencyImg = UK;
      currencysymbol = "£";
      currencyName = "Great Britain Pounds";
      break;
    case "U.S. Dollar":
      currencyImg = USA;
      currencysymbol = "$";
      currencyName = "United States Dollar";
      break;
    default:
    // code block
  }

  return (
    <>
      <motion.div
        // initial={{ opacity: 0, y: -10 }}
        // animate={{ opacity: 1, y: 0 }}
        // // transition={{
        // //   duration: 0.25,
        // // }}
        key={framerKey}
        whileHover={{
          backgroundColor: "#F5F6F8",
          cursor: "pointer",
          transition: { duration: 0.1 },
        }}
        className="rounded-3xl w-[300px] bg-gray-25 p-6 "
        onClick={() => {
          if (kycStatus) {
            navigate(`/dashboard/available-balance/${currency_id}`, {
              state: { currencyName, currencysymbol },
            });
          }

          if (!kycStatus) {
            toggleKycOverlay();
          }
        }}
      >
        <div className="flex items-center gap-2">
          <img src={currencyImg} alt="" className="h-8" />
          <p className="text-md font-medium text-gray-500">{currencyName}</p>
        </div>
        <div className="h-[30px]" />

        {/* Number(wholeNumber[1])  */}
        <div>
          <p className="text-caption font-semibold uppercase text-gray-400">
            Available Balance
          </p>
          <div className="h-1" />
          <div className="flex items-end">
            <p className="text-d-sm font-medium uppercase text-gray-600 font-clashGrotesk">
              {currencysymbol}
            </p>
            <p className="text-d-sm font-medium uppercase text-gray-600 font-clashGrotesk">
              {main}
            </p>
            <p className="text-d-xs font-medium uppercase text-gray-400 font-clashGrotesk">
              .
              {kobo.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              }) || "00"}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BalanceCard;
