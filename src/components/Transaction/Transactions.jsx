import React from "react";
import TransactionTable from "./TransactionTable";
import { Link } from "react-router-dom";

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
              to="/transactions"
              className="text-sm font-medium text-primary-500"
            >
              See all
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
