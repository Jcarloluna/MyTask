import React, { useState } from "react";
import { useGetTasksQuery } from "../hooks/useGetTasksQuery";
import { TaskCard } from "../components/Card";
import { Modal } from "../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { formTaskActions, taskModalActions } from "../store/index";

export const Dashboard = () => {
  const showModal = useSelector((state) => state.taskModal.showModal);
  const { loading, error, data } = useGetTasksQuery();

  return (
    <>
      <div className={''}>
        <div className={''}>
          {error && <h1> Failed to fetch tasks</h1>}
          {loading && <h1>Loading Tasks...</h1>}
          {data && <h1>Tasks List</h1>}
        </div>
        <div className={''}>
          {data &&
            data.tasks.map((task) => {
              return (
                <TaskCard
                  key={task.id}
                  task={task}
                />
              );
            })}
        </div>
      </div>
      {showModal && <Modal modalTitle={"Update Task"} />}
    </>
  );
};
