import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import PaperPlane from "../../assets/icons/PaperPlaneTiltSend.svg";
import sendIcon from "../../assets/icons/PaperPlaneTilt.svg";
import arrowRight from "../../assets/icons/CaretRight.svg";
import receipt from "../../assets/icons/IdentificationBadgeReceipt.svg";
import Bank from "../../assets/icons/Bank.svg";
import editIcon from "../../assets/icons/PencilSimpleLine.svg";
import calendar from "../../assets/icons/CalendarCheck.svg";
import { EnvelopeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import emptyState from "../../assets/icons/transactionEmpty.svg";
import { useSelector } from "react-redux";
import { extractInitials } from "../UtilityComponents/ExtractInitials";
import { AllCurrencies as localData } from "../data/AllCurrencies";
import { Eye } from "phosphor-react";
import RemoveRecipient from "./RemoveRecipient";

export const UserInitials = ({ initials, size = '10' }) => {
  const [colorCode, setcolorCode] = useState(1);
  useEffect(() => {
    let colorCodeVal = Math.floor(Math.random() * 5) + 1;
    setcolorCode(colorCodeVal);
  }, []);

  let avatarStyle = "";
  switch (colorCode) {
    case 1:
      avatarStyle = "bg-error-100 text-error-400";
      break;
    case 2:
      avatarStyle = "bg-primary-100 text-primary-400";
      break;
    case 3:
      avatarStyle = "bg-orange-100 text-orange-400";
      break;
    case 4:
      avatarStyle = "bg-green-100 text-green-400";
      break;
    case 5:
      avatarStyle = "bg-lightBlue-100 text-lightBlue-400";
      break;
    default:
      break;
  }

  return (
    <div
      className={`h-${size} w-${size} rounded-full ${avatarStyle} center text-sm font-medium`}
    >
      {initials}
    </div>
  );
};

const RecipientsName = ({ initials, name, created_at }) => {
  return (
    <div className="flex items-center gap-3">
      <UserInitials initials={initials} />

      <div>
        <p className="text-sm text-gray-500">{name}</p>
        <div className="h-0.5" />
        <p className="lg:hidden text-sm text-gray-500">{created_at}</p>
      </div>
    </div>
  );
};

// const TableHeader = () => {
//   return (
//     <div className="w-full flex">
//       <div className="bg-gray-25 border-b border-gray-100 px-6 py-3 w-[42%]">
//         <p className="text-gray-400 uppercase text-caption font-medium ">
//           name
//         </p>
//       </div>
//       <div className="bg-gray-25 border-b border-gray-100 px-6 py-3 w-[27%]">
//         <p className="text-gray-400 uppercase text-caption font-medium ">
//           currency / account
//         </p>
//       </div>
//       <div className="bg-gray-25 border-b border-gray-100 px-6 py-3 w-[20%]">
//         <p className="text-gray-400 uppercase text-caption font-medium ">
//           last payment
//         </p>
//       </div>
//       <div className="bg-gray-25 border-b border-gray-100 px-6 py-3 w-[11%]">
//         <p className="text-gray-400 uppercase text-caption font-medium text-right"></p>
//       </div>
//     </div>
//   );
// };

const EmptyState = () => {
  return (
    <div className="flex h-[350px] p-20 w-full center flex-col gap-4">
      <img src={emptyState} alt="" />
      <p className="text-d-xxs text-gray-400 font-clashGrotesk text-center">
        {" "}
        Your transactions will show here{" "}
      </p>
    </div>
  );
};

const RecipientsTable = () => {
  // eslint-disable-next-line
  const [userDetailCard, setUserDetailCard] = useState(false);
  const [cardShow, setCardShow] = useState(false);
  const [current, setCurrent] = useState(1);
  const allRecipientsStatus = useSelector(
    (state) => state.allRecipients.status
  );
  const allRecipients = useSelector(
    (state) => state.allRecipients.allRecipients
  );

  useEffect(() => {
    if (allRecipientsStatus === "fulfilled") {
      console.log(allRecipients);
    }
    // eslint-disable-next-line
  }, [allRecipientsStatus]);

  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useState("");
  const tableWidth = "w-full";
  return (
    <div className="font-inter">
      <div className="flex gap-4">
        <div
          className={`hidden lg:block duration-1000 transition-all ${tableWidth}`}
        >
          <div className="w-full flex">
            <div
              className={`bg-gray-25 border-b border-gray-100 px-6 py-3 ${
                cardShow ? "w-[50%]" : "opacity-100 translate-x-[0] w-[42%]"
              }`}
            >
              <p className="text-gray-400 uppercase text-caption font-medium ">
                Name
              </p>
            </div>
            <div
              className={`bg-gray-25 border-b border-gray-100 px-6 py-3 w-[27%] pl-12 duration-500 transition-all ${
                cardShow
                  ? "-translate-x-[40%] opacity-0 hidden"
                  : "opacity-100 translate-x-[0]"
              }`}
            >
              <p className="text-gray-400 uppercase text-caption font-medium ">
                currency / account
              </p>
            </div>

            <div
              className={`bg-gray-25 border-b border-gray-100 px-6 py-3 w-[20%] pl-12 duration-500 transition-all ${
                cardShow
                  ? "opacity-100 flex-1"
                  : "opacity-100 translate-x-[0] w-[20%]"
              }`}
            >
              <p className="text-gray-400 uppercase text-caption font-medium ">
                Last Payment
              </p>
            </div>

            {cardShow && (
              <img src={arrowRight} alt="" className="ml-2 opacity-0" />
            )}
            <div
              className={`bg-gray-25 border-b border-gray-100 px-6 py-3 w-[11%] pl-12 duration-500 transition-all ${
                cardShow
                  ? "-translate-x-[40%] opacity-0 hidden"
                  : "opacity-100 translate-x-[0]"
              }`}
            ></div>
          </div>

          {allRecipients.meta.total_records > 0 ? (
            allRecipients?.recipients.map((data, index) => {
              const date = new Date(data.created_at.Time);

              const currencyImg = localData.find((item) => {
                return item.currencyCode === data.currency;
              });

              return (
                <div
                  className={`group group-hover:bg-gray-25 cursor pointer w-full flex font-inter items-center h-[72px]  `}
                  key={index}
                  onClick={() => {
                    setUserDetailCard(true);
                    setCurrent(index);
                    setCardShow(true);
                  }}
                >
                  <div
                    className={`px-6 py-4  border-b border-gray-100 h-full flex items-center group-hover:bg-gray-25 duration-500 transition-all ${
                      current === index && cardShow && "bg-gray-25 "
                    }
                  
                  ${
                    cardShow ? "w-[50%]" : "opacity-100 translate-x-[0] w-[42%]"
                  }
                  
                  `}
                  >
                    <RecipientsName
                      created_at={format(Date.parse(date), "MMM dd, yyyy")}
                      initials={extractInitials(
                        data?.data?.account_holder_fullname
                      )}
                      name={data.data.account_holder_fullname}
                    />
                  </div>
                  <div
                    className={`duration-500 transition-all px-6 py-3 w-[27%] pl-12 ${
                      cardShow
                        ? "-translate-x-[40%] opacity-0 hidden"
                        : "opacity-100 translate-x-[0]"
                    } border-b border-gray-100 h-full flex items-center group-hover:bg-gray-25`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 ">
                        <img src={currencyImg.currencyImg} alt="" />
                      </div>
                      <div>
                        <p className="mb-0.5 text-sm text-gray-500">
                          United States Dollar
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`duration-500 transition-all px-6 py-3 w-[20%] pl-12 ${
                      cardShow
                        ? "opacity-100 flex-1"
                        : "opacity-100 translate-x-[0] w-[20%]"
                    } border-b border-gray-100 h-full flex items-center group-hover:bg-gray-25
                    ${current === index && cardShow && "bg-gray-25 "}
                    `}
                  >
                    <p className="text-gray-500  text-sm">
                      {format(Date.parse(date), "MMM dd, yyyy")}
                    </p>
                  </div>

                  {cardShow ? (
                    <img
                      src={arrowRight}
                      alt=""
                      className={`ml-2 ${
                        current === index ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ) : null}

                  <div
                    className={`duration-500 transition-all px-6 py-3 w-[11%] pl-12 ${
                      cardShow
                        ? "-translate-x-[27%] opacity-100 hidden"
                        : "opacity-100 translate-x-[0]"
                    } border-b border-gray-100 h-full flex items-center group-hover:bg-gray-25`}
                  >
                    <div className="h-5">
                      <img
                        src={PaperPlane}
                        alt=""
                        className="ml-auto grayscale"
                      />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <EmptyState />
          )}
        </div>

        {cardShow && (
          <div className="flex-1 hidden lg:block">
            <RecipientCard
              setUserDetailCard={setCardShow}
              userDetailCard={cardShow}
              initials={
                extractInitials(
                  allRecipients.recipients[current]?.data
                    ?.account_holder_fullname
                ) || ""
              }
              accountName={
                allRecipients.recipients[current]?.data
                  ?.account_holder_fullname || ""
              }
              email={allRecipients.recipients[current]?.data?.email || ""}
              account_number={
                allRecipients.recipients[current]?.data?.account_number.substr(
                  -4
                ) || ""
              }
              Bank={Bank}
              editIcon={editIcon}
              calendar={calendar}
              sendIcon={sendIcon}
            />
          </div>
        )}
      </div>

      {/* Mobile transaction Table */}
      <div className="flex flex-col gap-y-4 lg:hidden">
        {allRecipients.meta.total_records > 0 ? (
          allRecipients?.recipients.map((data, index, array) => {
            const date = new Date(data.created_at.Time);

            const currencyImg = localData.find((item) => {
              return item.currencyCode === data.currency;
            });

            console.log(index + 1 !== array.length);

            return (
              <div
                className={`flex justify-between`}
                key={index}
                onClick={() => {
                  setUserDetailCard(true);
                  setCurrent(index);
                  setCardShow(true);
                }}
              >
                <div className="flex items-center gap-4 w-full">
                  <div className="relative">
                    <UserInitials
                      initials={extractInitials(
                        data?.data?.account_holder_fullname
                      )}
                    />
                    <img
                      src={currencyImg.currencyImg}
                      alt=""
                      className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-[2px] border-gray-0"
                    />
                  </div>
                  <div className="flex-1">
                    <div>
                      <p className="text-sm text-gray-500">
                        {data.data.account_holder_fullname}
                      </p>
                      <div className="h-0.5" />
                      <p className="lg:hidden text-sm text-gray-500">
                        {format(Date.parse(date), "MMM dd, yyyy")}
                      </p>
                    </div>
                    {index + 1 !== array.length ? (
                      <div className="w-full mt-4 h-[1px] bg-gray-100" />
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <EmptyState />
        )}
        {/* <div className="lg:hidden ">
          <div className="flex justify-between">
            <Account type="personal" initials="SK" name="Sola Adetokin" />
            <p className="text-gray-500  text-sm  text-right">
              1,533,650.76 NGN
            </p>
          </div>
          <div className="h-4" />
          <div className="ml-[52px] w-[calc(100%-52px)] h-[1px] bg-gray-100" />
        </div>
        <div className="lg:hidden">
          <div className="flex justify-between">
            <Account type="personal" initials="SK" name="Sola Adetokin" />
            <p className="text-gray-500  text-sm  text-right">
              1,533,650.76 NGN
            </p>
          </div>
          <div className="h-4" />
          <div className="ml-[52px] w-[calc(100%-52px)] h-[1px] bg-gray-100" />
        </div> */}
      </div>
      {cardShow ? (
        <div className="flex flex-col gap-y-4 lg:hidden fixed bg-[#8C94A666] h-screen w-full top-0 left-0 z-[300] backdrop-blur-[1.5px] ">
          <div className="w-full bg-gray-0 absolute bottom-0 rounded-t-3xl">
            <RecipientCard
              setUserDetailCard={setCardShow}
              userDetailCard={cardShow}
              initials={
                extractInitials(
                  allRecipients.recipients[current]?.data
                    ?.account_holder_fullname
                ) || ""
              }
              accountName={
                allRecipients.recipients[current]?.data
                  ?.account_holder_fullname || ""
              }
              email={allRecipients.recipients[current]?.data?.email || ""}
              account_number={
                allRecipients.recipients[current]?.data?.account_number.substr(
                  -4
                ) || ""
              }
              Bank={Bank}
              editIcon={editIcon}
              calendar={calendar}
              sendIcon={sendIcon}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default RecipientsTable;

function RecipientCard({
  setUserDetailCard,
  userDetailCard,
  initials,
  accountName,
  email,
  account_number,
  Bank,
  editIcon,
  calendar,
  sendIcon,
}) {
  const [remove, setRemove] = useState(false);

  return (
    <>
      {remove && (
        <RemoveRecipient
          isOpen={remove}
          onClose={() => {
            setRemove(!remove);
          }}
        />
      )}

      <div className="lg:shadow-[0px_3px_18px_-4px_rgba(16,_24,_40,_0.1),_0px_3px_10px_-2px_rgba(16,_24,_40,_0.04)] rounded-3xl w-full lg:w-[437px]">
        <div className="p-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-1">
              <img src={receipt} alt="" />
              <p className="text-sm text-gray-400">Recipient Details</p>
            </div>
            <div
              className="h-10 w-10 flex center cursor-pointer group"
              onClick={() => {
                setUserDetailCard(!userDetailCard);
              }}
            >
              <XMarkIcon className="text-gray-300 group-hover:text-gray-400  h-6" />
            </div>
          </div>
          <div className="h-7" />
          <div className="flex gap-3 items-center">
            <div className="shadow-[0px_4px_12px_-4px_rgba(16,_24,_40,_0.1),_0px_2px_4px_-2px_rgba(16,_24,_40,_0.05)] border-2 border-gray-0 bg-lightBlue-100 text-lightBlue-500 text-d-xs font-medium font-clashGrotesk w-16 h-16 rounded-full flex center">
              <p>{initials}</p>
            </div>
            <div>
              <p className="text-d-xs font-medium font-clashGrotesk text-gray-600">
                {accountName}
              </p>
              <div className="h-1" />
              <div className="flex gap-1 items-center">
                <EnvelopeIcon className="h-4 text-gray-400" />
                <p className="text-sm text-gray-400">{email}</p>
              </div>
            </div>
          </div>
          <div className="h-8" />
          <div className="flex gap-2 items-center">
            <p className="text-sm text-gray-400">Bank Details</p>
            <div className="h-[1px] flex-1 bg-gray-100"></div>
          </div>
          <div className="h-4" />
          <div className="flex justify-between">
            <div className="flex gap-3">
              <div className="h-8 w-8 center flex bg-lightBlue-100 rounded-full">
                <img src={Bank} alt="" />
              </div>
              <div>
                <div className="h-2" />
                <div className="flex gap-3 items-center">
                  <p className="text-sm text-gray-500">UIJ90123HM2</p>

                  <div className="flex gap-1 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    <p className="text-sm text-gray-400">{account_number}</p>
                  </div>
                </div>
                <div className="h-1" />
                <p className="text-sm text-gray-500">Texas, USA</p>
              </div>
            </div>

            <div className="flex group items-center cursor-pointer">
              <p className="text-sm text-primary-500 font-medium mr-[4.5px]">
                View
              </p>
              <Eye className="transition-all duration-300 group-hover:visible group-hover:top-0 group-hover:opacity-100 invisible relative top-1/4 opacity-0 text-primary-500" />
            </div>
          </div>
          <div className="h-8" />
          <div className="bg-gray-25 rounded-2xl px-6 py-4">
            <div className="flex gap-2">
              <p className="text-sm text-gray-400 ">Last payment</p>
              <div className="flex gap-1">
                <img src={calendar} alt="" />
                <p className="text-sm text-gray-400 ">Mar 10, 2023</p>
              </div>
            </div>
            <div className="h-6" />
            <div className="flex items-center justify-between">
              <p className="text-d-xxs font-medium font-clashGrotesk text-gray-600">
                1,390.72 USD
              </p>

              <p className="text-sm text-primary-500 font-medium">View All</p>
            </div>
          </div>
          <div className="h-10" />
        </div>
        <div className="px-6 py-3 flex gap-4 border-t border-gray-100">
          <button
            className="flex-1 flex h-14  text-center text-gray-500 text-md font-medium rounded-xl border border-gray-100 items-center justify-center gap-2"
            onClick={() => {
              setRemove(!remove);
            }}
          >
            <p>
              Remove <span className="hidden md:inline">Recipient</span>
            </p>
          </button>
          <Link
            to="/dashboard/move-money"
            className="flex-1 h-14 bg-primary-400 text-center text-gray-0 text-md font-medium rounded-xl flex gap-2 center"
          >
            Send Money
            <div className="h-5 hidden md:block">
              <img src={sendIcon} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
