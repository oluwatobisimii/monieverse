import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "phosphor-react";
import React, { useState } from "react";

const QuestionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <AnimatePresence>
        <div className="flex items-center gap-6 ">
          <div className="text-[20px] text-primary-400">
            {isOpen ? <Minus /> : <Plus />}
          </div>
          <p>Is Monieverse legal?</p>
        </div>

        {isOpen ? (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: { height: "auto", opacity: 1 },
              closed: { height: 0, opacity: 0 },
            }}
            key={"question1"}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-6 mt-4 "
          >
            <div className="w-[20px] "></div>
            <p className="flex-1 text-sm md:text-md text-gray-400">
              Monieverse is a legally registered company under the applicable
              laws and regulations of the jurisdictions in which we operate. We
              comply with all necessary legal requirements to ensure that our
              operations are legitimate and transparent.
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="font-inter">
      <div className="container mx-auto p-4 md:p-8 lg:p-10 lg:py-[120px] py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full md:w-[60%] lg:w-[40%] ">
            <p className="font-clashGrotesk text-d-sm md:text-d-md lg:text-d-lg font-medium text-gray-600">
              Frequently Asked <br className="md:hidden"/> Questions,{" "}
              <span className="text-primary-400">Answered</span>
            </p>
          </div>
          <div className="flex-1">
            <QuestionComponent />
            <div className="h-8"></div>
            <div className="w-full h-[1px] bg-gray-100"></div>
            <div className="h-8"></div>
            <QuestionComponent />
            <div className="h-8"></div>
            <div className="w-full h-[1px] bg-gray-100"></div>
            <div className="h-8"></div>
            <QuestionComponent />
            <div className="h-8"></div>
            <div className="w-full h-[1px] bg-gray-100"></div>
            <div className="h-8"></div>
            <QuestionComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
