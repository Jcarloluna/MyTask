import React from "react";
import styles from "../styles/header.module.scss";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const path = useLocation();
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/dashboard");
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
            <button className={styles.button}>Add Task</button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
