import React from "react";
import heroBlob from "../assets/hero/blob.svg";
import heroImage from "../assets/hero/heroImage.svg";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/dashboard");
  };

  return (
    <div className="mt-[140px] lg:mt-[180px] border-b-[65px] border-mainGray h-auto px-[30px] sm:px-[70px] lg:px-[160px] overflow-hidden">
      <div className="grid grid-cols-7 space-y-12">
        <div className="space-y-4 md:space-y-8 col-span-7 xl:col-span-3">
          <div>
            <h1>Empowering</h1>
            <h1>Productivity</h1>
          </div>
          <h2 className="text-shadow">
            One <span className="text-mainLightBlue text-shadow"> Task </span>{" "}
            at a time.
          </h2>
          <button
            className="max-h-[75px] max-w-[270px] w-auto h-auto rounded-[25px] tracking-wider text-white hover:-translate-y-1 duration-100 bg-mainLightBlue font-bold text-xl py-[10px] px-[20px]"
            onClick={handleStart}
          >
            <h3>Start for free</h3>
          </button>
        </div>
        <div className="space-y-8 col-span-7 xl:col-span-4 flex justify-end items-end relative">
          <div className="relative">
            <img
              src={heroImage}
              alt="HeroImage"
              className="z-[2] translate-y-2 relative"
            />
          </div>
          <div className="absolute bottom-0 right-0 translate-x-20 transform scale-[2.5] md:scale-[1.8] translate-y-5">
            <img src={heroBlob} alt="Blob" />
          </div>
        </div>
      </div>
    </div>
  );
};
