import React from "react";
import styles from "../styles/header.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { formTaskActions, taskModalActions } from "../store";
import { MODAL_TYPE } from "../constants/tasks";

export const Header = () => {
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

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <div>
          <h1>MyTask</h1>
        </div>
        <div>
          {path.pathname == "/" ? (
            <button className={styles.button} onClick={handleStart}>
              Start
            </button>
          ) : path.pathname == "/dashboard" ? (
            <button onClick={handleAddTask} className={styles.button}>
              Add Task
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
