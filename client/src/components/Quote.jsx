import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";
import benjamin from "../assets/quote/benjamin.svg";

export const Quote = () => {
  return (
    <div className="min-h-[600px] h-auto bg-mainGray">
      <div className="flex px-[40px] sm:px-[80px] lg:px-[160px] py-[120px] flex-wrap justify-center items-center gap-12 md:gap-40">
        <div>
          <img src={benjamin} alt="benjamin" />
        </div>
        <div className="text-white flex flex-col md:flex-row gap-12">
          <div>
            <FaQuoteLeft size={50} />
          </div>
          <div className="gap-12 flex flex-col justify-center items-start">
            <h2>
              If you fail to <span className="text-mainLightBlue">plan</span>,{" "}
              <br />
              you are planning to fail
            </h2>
            <h3>- Benjamin Franklin</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
