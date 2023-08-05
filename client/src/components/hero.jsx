import React from "react";
import styles from "../styles/hero.module.scss";
import { useGetTasksQuery } from "../hooks/useGetTasksQuery";

export const Hero = () => {
  const { loading, error, data } = useGetTasksQuery();
  if (loading) return <p> LOADINGGG... </p>;
  if (error) return <p> ERROR !!!</p>;
  console.log(data);
  return (
    <div className={styles.container}>
      {data && <h1> Tasks</h1>}
      <ul>
        {data.tasks.map((task) => {
          return <li key={task.id}>{task.taskTitle}</li>;
        })}
      </ul>
    </div>
  );
};
