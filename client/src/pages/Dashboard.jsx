import React from "react";
import styles from "../styles/dashboard.module.scss";
import { useGetTasksQuery } from "../hooks/useGetTasksQuery";
import { TaskCard } from "../components/Card";


export const Dashboard = () => {
  const { loading, error, data } = useGetTasksQuery();
  console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {error && <h1> Failed to fetch tasks</h1>}
        {loading && <h1>Loading Tasks...</h1>}
        {data && <h1>Tasks List</h1>}
      </div>
      <div className={styles.cardContainer}>
        {data &&
          data.tasks.map((task) => {
            return <TaskCard key={task.id} task={task} />;
          })}
      </div>
    </div>
  );
};
