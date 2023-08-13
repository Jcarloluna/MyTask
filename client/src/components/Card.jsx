import React, { useState } from "react";
import { formTaskActions, taskModalActions } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateTaskMutation } from "../hooks/useUpdateTaskMutation";
import { HiFlag } from "react-icons/hi";
import { GrStatusGoodSmall } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { TASK_STATUS_OPTIONS } from "../constants/tasks";

export const TaskCard = ({ task }) => {
  const [priorityTooltipVisible, setPriorityTooltipVisible] = useState(false);
  const [statusTooltipVisible, setStatusTooltipVisible] = useState(false);
  const modalType = useSelector((state) => state.taskModal.modalType);
  const dispatch = useDispatch();

  const handleEditTask = () => {
    dispatch(taskModalActions.setModalType("EDIT"));
    dispatch(taskModalActions.toggleTaskModal(true));
    dispatch(formTaskActions.setTaskId(task.id));
    dispatch(formTaskActions.setTaskTitle(task.taskTitle));
    dispatch(formTaskActions.setTaskStatus(task.status));
  };

  const handlePriorityTooltipEnter = () => {
    setPriorityTooltipVisible(true);
  };

  const handlePriorityTooltipLeave = () => {
    setPriorityTooltipVisible(false);
  };

  const handleStatusTooltipEnter = () => {
    setStatusTooltipVisible(true);
  };

  const handleStatusTooltipLeave = () => {
    setStatusTooltipVisible(false);
  };

  // Check Priority
  const priorityColor =
    task.priority === "Low Priority"
      ? "#2EA523"
      : task.priority === "Mid Priority"
      ? "#DFE328"
      : "#E72323";

  // Check Status
  const statusColor =
    task.status == TASK_STATUS_OPTIONS.TO_DO
      ? "#E72323"
      : task.status == TASK_STATUS_OPTIONS.IN_PROGRESS
      ? "#DFE328"
      : "#2EA523";

  return (
    <div className="relative min-h-[75px] h-auto w-[90vw] md:w-[80vw]">
      <div className="absolute h-[100%] w-[100%] rounded-[25px] bg-mainLightBlue translate-y-1 -translate-x-1" />
      <div
        className={
          "flex z-[20] relative bg-mainWhite justify-center min-h-[75px] items-center rounded-[25px] border-mainGray border-[3px] min-w-[100$]"
        }
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center w-[100%] px-12 md:px-16">
          <h5 className="col-span-1 hidden lg:flex">{task.status}</h5>
          <h5 className="col-span-1">{task.taskTitle}</h5>
          <h5 className="col-span-1 hidden md:flex">{task.dateCreated}</h5>
          <div className="col-span-1 flex justify-center items-center gap-3 lg:gap-5">
            <button
              className={"rounded-full bg-mainLightBlue p-3 text-mainWhite"}
              onClick={handleEditTask}
            >
              <FiEdit className="text-[16px] md:text-[18px] lg:text-[25px]" />
            </button>
            <button className={"rounded-full bg-[#E72323] p-3 text-mainWhite"}>
              <MdDelete className="text-[16px] md:text-[18px] lg:text-[25px]" />
            </button>
          </div>
        </div>

        {/* STATUS ICON */}
        <div className="flex items-center justify-center">
          <div
            className="absolute left-4"
            onMouseEnter={handleStatusTooltipEnter}
            onMouseLeave={handleStatusTooltipLeave}
          >
            <GrStatusGoodSmall size={25} color={statusColor} />
          </div>

          {statusTooltipVisible && (
            <div
              className={`absolute  left-[-30px] bottom-[60px] tracking-wide bg-mainDarkBlue text-mainWhite opacity-90 py-1 px-3 rounded-[15px] duration-150 
            `}
            >
              {task.status}
            </div>
          )}
        </div>
        {/* PRIORITY ICON */}

        <div className="flex items-center justify-center">
          <div
            className="absolute right-4"
            onMouseEnter={handlePriorityTooltipEnter}
            onMouseLeave={handlePriorityTooltipLeave}
          >
            <HiFlag size={25} color={priorityColor} />
          </div>

          {priorityTooltipVisible && (
            <div
              className={`absolute right-[-30px] bottom-[60px] tracking-wide bg-mainDarkBlue text-mainWhite opacity-90 py-1 px-3 rounded-[15px] duration-150 
            `}
            >
              {task.priority}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
