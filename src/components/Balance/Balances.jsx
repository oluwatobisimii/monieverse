import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import BalanceCard from "./BalanceCard";

const Balances = () => {
  const moveRight = function () {
    const element = document.getElementById("outsider");
    element.scrollLeft += 350;
  };
  const moveLeft = function () {
    const element = document.getElementById("outsider");
    element.scrollLeft -= 350;
  };

  return (
    <section className="border-t border-gray-100 w-full overflow-hidden">
      <div className="container mx-auto px-4 py-6 lg:py-10">
        <div className="flex justify-between items-center ">
          <p className="text-[20px] lg:text-d-xs font-medium font-clashGrotesk">
            Your Balances
          </p>
          <div className="flex gap-4">
            <div
              className="p-2 rounded-full border border-gray-100"
              onClick={() => {
                moveLeft();
              }}
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-300" />
            </div>
            <div
              className="p-2 rounded-full  bg-gray-50"
              onClick={() => {
                moveRight();
              }}
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Space */}
        <div className="h-7" />
        {/* Space */}

        {/* Balances */}

        <div
          className="w-[107%] 2xl:w-[114%] overflow-x-scroll no-scrollbar"
          id="outsider"
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="flex gap-6 w-fit pr-[7%] 2xl:pr-[14%]">
            <BalanceCard currency={"Nigeria"} balance={234567888.23} />
            <BalanceCard currency={"USA"} />
            <BalanceCard currency={"UK"} />
            <BalanceCard currency={"China"} />
            <BalanceCard currency={"India"} />
            <BalanceCard currency={"Japan"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Balances;
