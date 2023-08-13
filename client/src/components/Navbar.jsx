import React from "react";
import { Link, useLocation, useNavigate, NavLink } from "react-router-dom";
import { Link as ReactLink } from "react-scroll";
import { useSelector, useDispatch } from "react-redux";
import { formTaskActions, taskModalActions } from "../store";
import { MODAL_TYPE } from "../constants/tasks";
import { useState, useEffect } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import myTaskLogo from "../assets/myTaskLogo.svg";


export const Navbar = () => {
  const dispatch = useDispatch();
  const path = useLocation();
  const navigate = useNavigate();
  const isDashboard = path.pathname == "/dashboard";
  const [isBurger, setIsBurger] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleStart = () => {
    navigate("/dashboard");
  };

  const handleBurgerClick = () => {
    setIsBurger(!isBurger);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 75) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleSignout = () => {
    navigate("/");
  };

  const linkStyles = isDashboard
    ? `hidden`
    : `text-center font-bold text-mainDarkBlue 
  hover:text-mainLightBlue duration-100 cursor-pointer tracking-wider  ${
    shadow ? "text-[18px]" : "text-[21px]"
  }`;

  return (
    <div
      className={`
        fixed z-50 duration-300 ease-in-out flex justify-between w-[100%] items-center py-[30px] px-[40px] sm:px-[80px] lg:px-[160px] bg-none
       ${
         shadow
           ? "shadow-xl max-h-[60px] md:max-h-[75px] bg-mainWhite "
           : "max-h-[150px]"
       }`}
    >
      <div className="flex flex-row justify-center items-center gap-2">
        <img src={myTaskLogo} alt="MyTaskLogo" className="h-[50px]"/>
        <h1
          className={`hidden sm:flex text-shadow duration-300 ease-in-out  ${
            shadow
              ? "text-[30px] md:text-[35px] lg:text-[40px]"
              : "text-[40px] md:text-[45px] lg:text-[50px]"
          }`}
        >
          My<span className="text-mainLightBlue">Task</span>
        </h1>
      </div>
      <div>
        <ul className="hidden lg:flex flex-row justify-around items-center gap-[25px]">
          {path.pathname == "/about" && (
            <li className={linkStyles}>
              <NavLink to={"/"}>Home</NavLink>
            </li>
          )}
          <li className={linkStyles}>
            <ReactLink to={"features"} smooth={true} duration={120} offset={0}>
              Features
            </ReactLink>
          </li>
          <li className={linkStyles}>
            <NavLink to={"/about"} target="_blank">
              About
            </NavLink>
          </li>
          <li className={linkStyles}>
            <Link to={"/dashboard"}>Sign in</Link>
          </li>
          {!isDashboard ? (
            <NavLink
              to={"/dashboard"}
              onClick={handleBurgerClick}
              className={
                "rounded-[25px] tracking-wider text-white navlink hover:-translate-y-1 duration-100 bg-mainLightBlue font-bold text-xl py-[10px] px-[20px]"
              }
            >
              Sign Up
            </NavLink>
          ) : path.pathname == "/dashboard" ? (
            <NavLink
              to={"/"}
              onClick={handleBurgerClick}
              className={
                "rounded-[25px] navlink tracking-wider text-white hover:box-shadow hover:-translate-y-1 duration-100 bg-mainLightBlue font-bold text-xl py-[10px] px-[20px]"
              }
            >
              Sign out
            </NavLink>
          ) : (
            ""
          )}
        </ul>
      </div>
      <div
        className="flex lg:hidden items-center justify-center cursor-pointer"
        onClick={handleBurgerClick}
      >
        {!isBurger ? (
          <FaBarsStaggered
            size={shadow ? 35 : 50}
            title="Navigate"
            className="text-mainLightBlue duration-300 ease-in-out"
          />
        ) : (
          <FaXmark
            size={shadow ? 35 : 50}
            title="Navigate"
            className="text-mainLightBlue duration-300 ease-in-out"
          />
        )}
      </div>

      <div
        className={`lg:hidden duration-500 ease-in-out absolute top-[110px] py-[20px] right-[40px] sm:right-[80px] lg:right-[160px] 
        rounded-[25px] shadow-2xl border-mainLightBlue border-[2px] list-none bg-mainWhite ${
          isBurger ? "flex" : " translate-x-[500px] opacity-0"
        }`}
      >
        <div className="flex flex-col justify-start items-center p-[20px] space-y-8 ">
          {path.pathname == "/about" && (
            <li className={linkStyles}>
              <NavLink to={"/"} onClick={handleBurgerClick}>
                Home
              </NavLink>
            </li>
          )}
          <li className={linkStyles}>
            <ReactLink
              to={"features"}
              smooth={true}
              duration={120}
              offset={0}
              onClick={handleBurgerClick}
            >
              Features
            </ReactLink>
          </li>
          <li className={linkStyles}>
            <NavLink to={"/about"} target="_blank" onClick={handleBurgerClick}>
              About
            </NavLink>
          </li>
          <li className={linkStyles}>
            <Link to={"/sign-in"} onClick={handleBurgerClick}>
              Sign in
            </Link>
          </li>
          {!isDashboard ? (
            <NavLink
              to={"/dashboard"}
              onClick={handleBurgerClick}
              className={
                "rounded-[25px] tracking-wider text-white hover:-translate-y-1 duration-100 bg-mainLightBlue font-bold text-xl py-[10px] px-[20px]"
              }
            >
              Sign Up
            </NavLink>
          ) : path.pathname == "/dashboard" ? (
            <NavLink
              to={"/"}
              onClick={handleBurgerClick}
              className={
                "rounded-[25px] tracking-wider text-white hover:-translate-y-1 duration-100 bg-mainLightBlue font-bold text-xl py-[10px] px-[20px]"
              }
            >
              Sign out
            </NavLink>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
