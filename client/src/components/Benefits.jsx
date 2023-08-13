import React from "react";
import productivity from "../assets/benefits/productivity.svg";
import time from "../assets/benefits/time.svg";
import goal from "../assets/benefits/goal.svg";

export const Benefits = () => {
  const benefitCards =
    "col-span-3 lg:col-span-1 flex flex-col gap-8 text-center justify-center items-center";

  return (
    <div className="h-auto min-h-[550px] px-[20px] sm:px-[40px] lg:px-[80px] overflow-hidden justify-center flex items-center py-[120px]">
      <div className="grid grid-cols-3 justify-around items-center gap-24">
        <div className={benefitCards}>
          <img src={productivity} alt="productivity" />
          <h5>
            Enhanced Productivity <br /> and Organization
          </h5>
        </div>
        <div className={benefitCards}>
          <img src={goal} alt="goal" />
          <h5>
            Clear Task Prioritization
            <br /> and Goal Tracking
          </h5>
        </div>
        <div className={benefitCards}>
          <img src={time} alt="time" />
          <h5>
            Reduced Stress and Improved <br /> Time Management
          </h5>
        </div>
      </div>
    </div>
  );
};
