import { useRef, useEffect, useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import axios from "axios";

const LegendInputPhoneNumber = ({
  placeholder,
  onChange,
  width,
  type,
  mt,
  value,
  icon,
  iconClick,
  inputref,
  disabled,
  countCode,
  setCountCode,
}) => {
  const contWidth = width ? width : "w-full";
  // const bg = login ? "bg-highlighted focus:ring-1 focus:ring-blue" : "bg-greyBg focus:ring-0 focus:ring-wireframe"

  let placeholderText = useRef();
  let cont = useRef();

  const [countries, setCountries] = useState([]);
  // const [countCode, setCountCode] = useState('+234')

  const focusHandler = () => {
    placeholderText.current.classList.remove(
      "top-3",
      "bg-white",
      "w-3/4",
      "h-full",
      "right-0"
    );
    placeholderText.current.classList.add(
      "-top-2",
      "bg-white",
      "w-auto",
      "h-auto",
      "left-2"
    );
  };

  useEffect(() => {
    new Promise((resolve, reject) => {
      axios
        .get("https://restcountries.com/v3.1/all")
        .then((response) => {
          let data = response.data;
          let filtered = data.filter((count) => {
            let name = count.name.common;
            return (
              name === "Nigeria" ||
              name === "Kenya" ||
              name === "Egypt" ||
              name === "Ghana"
            );
          });
          setCountries(filtered);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);

  const countriesCard = useRef();

  const changeCountryCode = (code) => {
    setCountCode(code);
    countriesCard.current.classList.toggle("hidden");
  };

  const showCountriesCard = () => {
    countriesCard.current.classList.toggle("hidden");
    cont.current.classList.toggle("shadow-lg");
  };

  return (
    <div
      ref={cont}
      className={`${
        mt ? mt : "mt-6"
      } ${contWidth} h-11 relative flex border border-outline rounded-inputs text-darkGray text-xs`}
    >
      <div
        className="w-1/4 h-auto flex items-center rounded-l-inputs justify-start pl-2 relative border-r border-outline bg-highlighted"
        onClick={showCountriesCard}
      >
        {countCode} <KeyboardArrowDownRoundedIcon />
      </div>
      <input
        type="number"
        value={value}
        ref={inputref}
        onFocus={focusHandler}
        onChange={onChange}
        className={`w-3/4 h-10 outline-none rounded-r-inputs relative bg-highlighted pl-2`}
        disabled={disabled}
        id={placeholder}
        name="phoneNumber"
      />
      {icon && (
        <span className="absolute top-4 right-2" onClick={iconClick}>
          <i className={`${icon} ri-lg`}></i>
        </span>
      )}
      {placeholder && (
        <label
          htmlFor={placeholder}
          ref={placeholderText}
          className={`absolute ${
            value
              ? "-top-2 left-2 bg-white h-auto w-auto"
              : "top-3 h-full w-3/4 right-0"
          } text-darkGray text-xs animate px-2`}
        >
          {placeholder}{" "}
        </label>
      )}
      {/* Countries list */}
      <div
        ref={countriesCard}
        className="absolute top-12 left-0 w-full h-auto bg-white p-2 space-y-2 shadow-lg rounded-cards hidden zoom z-30"
      >
        {countries.map((c) => {
          let code = `${c.idd.root}${c.idd.suffixes[0]}`;
          return (
            <div
              key={c.name.common}
              className="h-auto flex items-center justify-between text-lightGray hover:bg-highlighted p-2 rounded-inputs cursor-pointer"
              onClick={() => changeCountryCode(code)}
            >
              <div className="flex items-center justify-start">
                <img
                  src={c.flags.svg}
                  alt="Country flag"
                  className="w-8 h-8 rounded-full"
                ></img>
                <p className="ml-4">{c.name.common}</p>
              </div>
              <p>{code}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LegendInputPhoneNumber;
