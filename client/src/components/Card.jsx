import React from "react";
import { formTaskActions, taskModalActions } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateTaskMutation } from "../hooks/useUpdateTaskMutation";

export const TaskCard = ({ task }) => {
  const modalType = useSelector((state) => state.taskModal.modalType);
  const dispatch = useDispatch();

  const handleEditTask = () => {
    dispatch(taskModalActions.setModalType("EDIT"));
    dispatch(taskModalActions.toggleTaskModal(true));
    dispatch(formTaskActions.setTaskId(task.id));
    dispatch(formTaskActions.setTaskTitle(task.taskTitle));
    dispatch(formTaskActions.setTaskStatus(task.status));
  };

  // Check Status
  // const statusColor =
  //   task.status == StatusValue.Start
  //     ? "red"
  //     : task.status == StatusValue.Progress
  //     ? "orange"
  //     : "green";

  return (
    <>
      <div className={''}>
        <h4 style={{ textTransform: "capitalize" }}>
          {task.user && task.user.userName !== null
            ? task.user.userName
            : "Unknown"}
          's Task
        </h4>
        <h3>{task.taskTitle}</h3>
        <h3>{task.status}</h3>
        <hr></hr>
        <div className={''}>
          <button className={''} onClick={handleEditTask}>
            Edit
          </button>
          <button className={''}>Delete</button>
        </div>
      </div>
    </>
  );
};
