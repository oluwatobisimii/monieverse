import React from "react";
import TransactionTable from "./TransactionTable";
import { Link } from "react-router-dom";
import { CaretRight } from "phosphor-react";

const Transactions = () => {
  return (
    <section className="bg-gray-50 w-full overflow-hidden">
      <div className="container mx-auto px-4 py-6 lg:py-10">
        <div className="bg-gray-0 rounded-2xl lg:rounded-3xl lg:px-10 lg:py-6 p-4">
          <div className="flex justify-between items-center">
            <p className="font-clashGrotesk text-[20px] lg:text-d-xs font-medium">
              Transactions
            </p>
            <Link
              to="/dashboard/transactions"
              className="flex group items-center cursor-pointer text-sm font-medium text-primary-500"
            >
              <p className="text-sm text-primary-500 font-medium mr-[4.5px]">
                See all
              </p>
              <CaretRight className="transition-all duration-300 group-hover:visible group-hover:left-0 group-hover:opacity-100 invisible relative left-[8px] opacity-0 text-primary-500 h-4" />
            </Link>
          </div>
          <div className="h-6 lg:h-10" />
          <TransactionTable />
        </div>
      </div>
    </section>
  );
};

export default Transactions;
