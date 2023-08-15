import React, { useState } from "react";
import { useGetTasksQuery } from "../hooks/useGetTasksQuery";
import { TaskCard } from "../components/Card";
import { Modal } from "../components/Modal";
import { Footer } from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { formTaskActions, taskModalActions } from "../store/index";
import { FiPlusCircle } from "react-icons/fi";
import Loading from "../components/Loading";
import { MODAL_TYPE } from "../constants/tasks";

export const Dashboard = () => {
  const showModal = useSelector((state) => state.taskModal.showModal);
  const dispatch = useDispatch();
  const { loading, error, data } = useGetTasksQuery();
  console.log(data, "data");

  const handleAddTask = () =>{
    dispatch(taskModalActions.setModalType(MODAL_TYPE.ADD))
    dispatch(taskModalActions.toggleTaskModal(true))
  }



  return (
    <>
      <div
        className={
          "mt-[100px] px-[30px] sm:px-[70px] lg:px-[160px] min-h-[70vh]"
        }
      >
        <div className={"flex flex-row justify-between items-center"}>
          <div className="flex justify-center items-center">
            <h3>Task List </h3>
            <span className="font-bold text-mainLightBlue text-[60px] md:text-[100px] ml-2 sm:ml-4 md:ml-8">
              &gt;
            </span>
          </div>
          <div>
            <button onClick={handleAddTask} className="flex items-center justify-center gap-2 rounded-[25px] navlink tracking-wider text-white hover:box-shadow hover:-translate-y-1 duration-100 bg-mainLightBlue font-bold text-xl py-[10px] px-[20px]">
             <FiPlusCircle className="text-[16px] md:text-[18px] lg:text-[25px]"/>
              Add Task
            </button>
          </div>
        </div>
        {loading && (
          <div className="flex justify-center min-h-[30vh] items-center scale-[2]">
            <Loading />
          </div>
        )}
        {!loading && (
          <div
            className={"flex my-5 justify-center items-center gap-5 flex-col"}
          >
            {data &&
              data.tasks.map((task) => {
                return <TaskCard key={task.id} task={task} />;
              })}
          </div>
        )}
      </div>

      {showModal && <Modal/>}
      <Footer />
    </>
  );
};
