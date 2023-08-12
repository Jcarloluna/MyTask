import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { taskModalActions, formTaskActions } from "../store";
import { useUpdateTaskMutation } from "../hooks/useUpdateTaskMutation";
import { useAddTaskMutation } from "../hooks/useAddTaskMutation";
import { TASK_STATUS_OPTIONS, MODAL_TYPE } from "../constants/tasks";

export const Modal = (props) => {
  const userId = "64cdb4431101c196fb05e8fc"; //Temporary user id
  const { taskTitle, taskStatus, taskId } = useSelector(
    (state) => state.formTask
  );
  useEffect(() => {
    console.log("from rtk", taskTitle, taskStatus, taskId);
  }, [taskTitle, taskStatus, taskId]);
  const modalType = useSelector((state) => state.taskModal.modalType);
  const { addTask } = useAddTaskMutation(userId, taskTitle, taskStatus);

  const { updateTask } = useUpdateTaskMutation();
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(taskModalActions.toggleTaskModal(false));
    dispatch(taskModalActions.setModalType(null));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modalType === MODAL_TYPE.EDIT) {
      updateTask();
    }
    if (modalType === MODAL_TYPE.ADD) {
      addTask(userId, taskTitle, taskStatus);
    }

    dispatch(formTaskActions.clearForm());
    dispatch(taskModalActions.toggleTaskModal(false));
    dispatch(taskModalActions.setModalType(null));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "taskTitle":
        dispatch(formTaskActions.setTaskTitle(value));
        console.log(taskTitle);
        break;
      case "taskStatus":
        dispatch(formTaskActions.setTaskStatus(value));
        console.log(taskStatus);
        break;
      default:
        break;
    }
  };

  return (
    <div className={''} onClick={handleCloseModal}>
      <div className={''} onClick={(e) => e.stopPropagation()}>
        <div className={''}>
          <div className={''}>
            <h3 className={''}>{props.modalTitle}</h3>
            <span onClick={handleCloseModal} className={''}>
              &times;
            </span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={''}>
              <div>
                <label htmlFor="taskTitle">Task Title:</label>
                <input
                  type="text"
                  value={taskTitle}
                  name="taskTitle"
                  id="taskTitle"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="taskStatus">Task Status:</label>
                <select
                  id="taskStatus"
                  name="taskStatus"
                  value={taskStatus}
                  onChange={handleChange}
                >
                  {Object.keys(TASK_STATUS_OPTIONS).map((key) => (
                    <option key={key} value={key}>
                      {TASK_STATUS_OPTIONS[key]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className={''}>
              <button type={"submit"} className={''}>
                Save
              </button>
              <button
                type="button"
                className={`${''} ${''}`}
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
