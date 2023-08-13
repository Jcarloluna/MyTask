import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ReactLink } from "react-scroll";
import { useSelector, useDispatch } from "react-redux";
import { formTaskActions, taskModalActions } from "../store";
import { MODAL_TYPE } from "../constants/tasks";

export const Navbar = () => {
  const dispatch = useDispatch();
  const path = useLocation();
  const navigate = useNavigate();
  const isDashboard = path.pathname == "/dashboard";

  const handleStart = () => {
    navigate("/dashboard");
  };

  const handleSignout = () => {
    navigate("/");
  };

  const linkStyles = isDashboard
    ? `hidden`
    : `text-[18px] text-center font-bold text-mainDarkBlue 
  hover:text-mainLightBlue duration-100 cursor-pointer tracking-wide`;

  return (
    <div
      className={
        "flex flex-row justify-between items-center bg-none lg:py-[40px]  px-[20px] sm:px-[40px] lg:px-[80px]"
      }
    >
      <div>
        <h2 className="text-shadow">
          My<span className="text-mainLightBlue">Task</span>
        </h2>
      </div>
      <ul className="flex flex-row justify-around items-center gap-[25px]">
        <li className={linkStyles}>
          <ReactLink to={"features"} smooth={true} duration={120} offset={0}>
            Features
          </ReactLink>
        </li>
        <li className={linkStyles}>
          <Link to={"/about"}>About</Link>
        </li>
        <li className={linkStyles}>
          <Link to={"/sign-in"}>Sign in</Link>
        </li>
        {!isDashboard ? (
          <button onClick={handleStart}>Sign Up</button>
        ) : path.pathname == "/dashboard" ? (
          <button onClick={handleSignout}>Sign out</button>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};
