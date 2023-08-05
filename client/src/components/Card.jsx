import React from "react";
import styles from "../styles/dashboard.module.scss";
import { StatusValue } from "../constants/tasks";

export const TaskCard = ({ task }) => {
  // Check Status
  // const statusColor =
  //   task.status == StatusValue.Start
  //     ? "red"
  //     : task.status == StatusValue.Progress
  //     ? "orange"
  //     : "green";

  return (
    <div className={styles.card}>
      <h4 style={{ textTransform: "capitalize" }}>
        {task.user.userName}'s Task
      </h4>
      <h3>{task.taskTitle}</h3>
      <h3>{task.status}</h3>
      <hr></hr>
      <div className={styles.cardActionsContainer}>
        <button className={styles.cardActions}>Edit</button>
        <button className={styles.cardActions}>Delete</button>
      </div>
    </div>
  );
};
