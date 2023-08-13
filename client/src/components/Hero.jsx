import React from "react";
import heroBlob from "../assets/hero/blob.svg";
import heroImage from "../assets/hero/heroImage.svg";

export const Hero = () => {
  return (
    <div className="pt-12 border-b-[65px] border-mainGray h-auto  px-[20px] sm:px-[40px] lg:px-[80px] overflow-hidden">
      <div className="grid grid-cols-7">
        <div className="space-y-8 col-span-7 lg:col-span-3">
          <div>
            <h1>Empowering</h1>
            <h1>Productivity</h1>
          </div>
          <h2 className="text-shadow">
            One <span className="text-mainLightBlue text-shadow"> Task </span>{" "}
            at a time.
          </h2>
          <button className="h-[75px] w-[270px] rounded-[50px]">
            <h3>Start for free</h3>
          </button>
        </div>
        <div className="space-y-8 col-span-7 lg:col-span-4 flex justify-end items-end relative">
          <div className="relative">
            <img
              src={heroImage}
              alt="HeroImage"
              className="z-[2] translate-y-2 relative"
            />
          </div>
          <div className="absolute bottom-0 right-0 transform scale-150 translate-y-5">
            <img src={heroBlob} alt="Blob" />
          </div>
        </div>
      </div>
    </div>
  );
};
