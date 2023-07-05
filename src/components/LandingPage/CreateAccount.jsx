import { IdentificationBadge } from "phosphor-react";
import React from "react";

const CreateAccount = () => {
  return (
    <section className="font-inter">
      <div className="container mx-auto p-4 md:p-8 lg:p-10 lg:py-[120px] py-12">
        <div>
          <p className="text-caption px-4 py-2 uppercase border rounded-full text-orange-400 border-orange-400 text-center font-semibold w-fit mx-auto">
            move money, seamlessly!
          </p>
          <div className="h-2"></div>
          <div className="text-d-md items-center justify-center lg:text-d-xl font-clashGrotesk font-medium flex gap-2 ">
            <p>Create an</p>
            <span>
              <IdentificationBadge weight="fill" className="text-orange-400" />
            </span>
            <p>Account</p>
          </div>
          <div className="h-4"></div>
          <p className="text-gray-400 text-md md:text-lg lg:w-[515px] text-center mx-auto">
            Set up an account either as an agent or business and complete your
            profile to enable you send and receive money.
          </p>
        </div>
        <div className="h-12 lg:h-[120px]"></div>
        <div className="flex gap-8 flex-col lg:flex-row">
          <div className="bg-gray-25 rounded-2xl py-8">
            <div className="ml-8 h-[480px] bg-gray-100 rounded-l-xl"></div>
            <div className="h-8"></div>
            <div className="px-8">
              <p className="text-md md:text-lg font-medium text-primary-500">
                Easy to Use
              </p>
              <div className="h-2"></div>
              <p className="text-md md:text-lg  text-gray-400">
                Regardless of expertise, Monieverse gives you a simplified
                experience.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-gray-25 rounded-2xl py-8">
              <div className="mr-8 h-[220px] bg-gray-100 rounded-r-xl"></div>
              <div className="h-8"></div>
              <div className="px-8">
                <p className="text-md md:text-lg font-medium text-primary-500">
                  Easy to Use
                </p>
                <div className="h-2"></div>
                <p className="text-md md:text-lg  text-gray-400">
                  Regardless of expertise, Monieverse gives you a simplified
                  experience.
                </p>
              </div>
            </div>

            <div className="h-8"></div>
            <div className="h-[228px] bg-gray-25 rounded-2xl"></div>
          </div>

          <div>
            <div className="bg-gray-25 rounded-2xl py-8">
              <div className="ml-8 h-[134px] bg-gray-100 rounded-l-xl"></div>
              <div className="h-8"></div>
              <div className="px-8">
                <p className="text-md md:text-lg font-medium text-primary-500">
                  Easy to Use
                </p>
                <div className="h-2"></div>
                <p className="text-md md:text-lg  text-gray-400">
                  Regardless of expertise, Monieverse gives you a simplified
                  experience.
                </p>
              </div>
            </div>
            <div className="h-8"></div>
            <div className="bg-gray-25 rounded-2xl py-8">
              <div className="ml-8 h-[134px] bg-gray-100 rounded-l-xl"></div>
              <div className="h-8"></div>
              <div className="px-8">
                <p className="text-md md:text-lg font-medium text-primary-500">
                  Easy to Use
                </p>
                <div className="h-2"></div>
                <p className="text-md md:text-lg  text-gray-400">
                  Regardless of expertise, Monieverse gives you a simplified
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAccount;
