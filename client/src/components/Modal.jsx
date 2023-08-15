import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { taskModalActions, formTaskActions } from "../store";
import { useUpdateTaskMutation } from "../hooks/useUpdateTaskMutation";
import { useAddTaskMutation } from "../hooks/useAddTaskMutation";
import {
  TASK_STATUS_OPTIONS,
  MODAL_TYPE,
  TASK_PRIORITY_OPTIONS,
} from "../constants/tasks";

export const Modal = (props) => {
  const userId = "64cdb4431101c196fb05e8fc"; //Temporary user id
  const { taskTitle, taskDescription, taskStatus, taskPriority, taskId } =
    useSelector((state) => state.formTask);
  useEffect(() => {
    console.log(
      "from rtk",
      taskTitle,
      taskDescription,
      taskStatus,
      taskPriority,
      taskId
    );
  }, [taskTitle, taskStatus, taskId]);
  const modalType = useSelector((state) => state.taskModal.modalType);
  const { addTask } = useAddTaskMutation();
  const { updateTask } = useUpdateTaskMutation();
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(taskModalActions.toggleTaskModal(false));
    dispatch(taskModalActions.setModalType(null));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modalType === MODAL_TYPE.EDIT) {
      updateTask(taskId, taskTitle, taskDescription, taskStatus, taskPriority);
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
        break;
      case "taskDescription":
        dispatch(formTaskActions.setTaskDescription(value));
        break;
      case "taskStatus":
        dispatch(formTaskActions.setTaskStatus(value));
        break;
      case "taskPriority":
        dispatch(formTaskActions.setTaskPriority(value));
        break;
      default:
        break;
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      // onClick={handleCloseModal}
    >
      <div
        className="bg-white w-96 rounded-lg " /*{onClick={(e) => e.stopPropagation()}*/
      >
        <div className="px-5 py-3 bg-mainLightBlue text-white flex justify-between items-center">
          <h3 className="text-lg font-semibold">{props.modalTitle}</h3>
          <span
            className="text-3xl cursor-pointer hover:scale-[1.1] hover:-translate-y-[1px] duration-75 active:scale-[.90]"
            onClick={handleCloseModal}
          >
            &times;
          </span>
        </div>
        <form className="px-5 py-3" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="taskTitle" className="block text-sm font-medium">
                Task Title:
              </label>
              <input
                type="text"
                value={taskTitle}
                name="taskTitle"
                id="taskTitle"
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-sm focus:ring focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="taskDescription"
                className="block text-sm font-medium"
              >
                Task Description:
              </label>
              <textarea
                type="text"
                value={taskDescription}
                rows={2}
                name="taskDescription"
                id="taskDescription"
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-sm focus:ring focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="taskStatus" className="block text-sm font-medium">
                Task Status:
              </label>
              <select
                id="taskStatus"
                name="taskStatus"
                value={taskStatus}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-sm focus:ring focus:ring-blue-500"
              >
                {Object.keys(TASK_STATUS_OPTIONS).map((key) => (
                  <option key={key} value={key}>
                    {TASK_STATUS_OPTIONS[key]}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="taskPriority"
                className="block text-sm font-medium"
              >
                Task Priotiy:
              </label>
              <select
                id="taskPriority"
                name="taskPriority"
                value={taskPriority}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-sm focus:ring focus:ring-blue-500"
              >
                {Object.keys(TASK_PRIORITY_OPTIONS).map((key) => (
                  <option key={key} value={key}>
                    {TASK_PRIORITY_OPTIONS[key]}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-sm hover:bg-blue-600"
            >
              Save
            </button>
            <button
              type="button"
              className="px-4 py-2 ml-2 bg-gray-300 text-gray-700 rounded-sm hover:bg-gray-400"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
