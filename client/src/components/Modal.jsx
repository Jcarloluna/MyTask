import React from "react";
import styles from "../styles/modal.module.scss";
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
  const modalType = useSelector((state) => state.taskModal.modalType);
  const { addTask } = useAddTaskMutation(userId, taskTitle, taskStatus);

  const { updateTask } = useUpdateTaskMutation(taskId, taskTitle, taskStatus);
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
      addTask();
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
    <div className={styles.modalBackdrop} onClick={handleCloseModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>{props.modalTitle}</h3>
            <span onClick={handleCloseModal} className={styles.modalClose}>
              &times;
            </span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.modalBody}>
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
            <div className={styles.modalFooter}>
              <button type={"submit"} className={styles.btn}>
                Save
              </button>
              <button
                type="button"
                className={`${styles.btn} ${styles.modalClose}`}
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
