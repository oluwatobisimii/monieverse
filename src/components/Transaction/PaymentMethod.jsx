import React from 'react'
import Bank from "../../assets/payment/Bank.svg";
import CreditCard from "../../assets/payment/CreditCard.svg";
import Swap from "../../assets/payment/Swap.svg";

const PaymentMethod = ({ type }) => {
    let paymentIcon;
    let paymentDesc;
    switch (type.toLowerCase()) {
      case "bank":
        paymentIcon = Bank;
        paymentDesc = "Bank";
        break;
  
      case "card":
        paymentIcon = CreditCard;
        paymentDesc = "Card";
        break;
  
      case "swap":
        paymentIcon = Swap;
        paymentDesc = "Swap";
        break;
  
      default:
        break;
    }
    return (
      <div className="flex items-center gap-2">
        <img src={paymentIcon} alt="" />
        <p className="text-sm text-gray-500">{paymentDesc}</p>
      </div>
    );
  };

export default PaymentMethod