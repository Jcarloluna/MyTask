import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="min-h-[100px] bg-mainGray flex flex-wrap justify-between items-center flex-row px-[20px] sm:px-[40px] lg:px-[80px] py-[30px]">
      {/* <img src={jclLogo} alt="Logo" /> */}
      <p className="text-white text-[21px] font-medium">
        © Designed and Developed by JCL
      </p>
      <div className="text-white  flex-row flex gap-5">
        <Link to="https://github.com/Jcarloluna/MyTask" target="_blank">
          <FaGithub
            size={35}
            className="hover:text-mainLightBlue box-shadow hover:-translate-y-1 duration-75"
          />
        </Link>
        <Link to="https://www.facebook.com/Carlo.Luna24/" target="_blank">
          <FaFacebook
            size={35}
            className="hover:text-mainLightBlue box-shadow hover:-translate-y-1 duration-75"
          />
        </Link>
        <Link to="https://www.linkedin.com/in/jhon-carlo-luna/" target="_blank">
          <FaLinkedin
            size={35}
            className="hover:text-mainLightBlue box-shadow hover:-translate-y-1 duration-75"
          />
        </Link>
      </div>
    </div>
  );
};
