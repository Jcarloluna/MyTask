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

  const handleStart = () => {
    navigate("/dashboard");
  };

  const handleAddTask = () => {
    dispatch(taskModalActions.toggleTaskModal(true));
    dispatch(taskModalActions.setModalType(MODAL_TYPE.ADD));
    dispatch(formTaskActions.clearForm());
  };

  const linkStyles = `text-[21px] text-center font-bold text-mainDarkBlue 
  hover:text-mainLightBlue duration-100 cursor-pointer tracking-wide`;

  return (
    <div
      className={
        "flex flex-row justify-between items-center lg:py-[40px] lg:px-[80px]"
      }
    >
      <div>
        <h1>
          My<span className="text-mainLightBlue">Task</span>
        </h1>
      </div>
      <ul className="flex flex-row justify-around items-center gap-[25px]">
        <li className={linkStyles}>
          <ReactLink to={"features"} smooth={true} duration={150} offset={0}>
            Features
          </ReactLink>
        </li>
        <li className={linkStyles}>
          <Link to={"/about"}>About</Link>
        </li>
        <li className={linkStyles}>
          <Link to={"/sign-in"}>Sign in</Link>
        </li>
        {path.pathname == "/" ? (
          <button onClick={handleStart}>Sign Up</button>
        ) : path.pathname == "/dashboard" ? (
          <button onClick={handleAddTask}>Add Task</button>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};
