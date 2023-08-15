import React, { useState } from "react";
import { useGetTasksQuery } from "../hooks/useGetTasksQuery";
import { TaskCard } from "../components/Card";
import { Modal } from "../components/Modal";
import { Footer } from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { formTaskActions, taskModalActions } from "../store/index";
import Loading from "../components/Loading";

export const Dashboard = () => {
  const showModal = useSelector((state) => state.taskModal.showModal);
  const { loading, error, data } = useGetTasksQuery();
  console.log(data, "data");



  return (
    <>
      <div
        className={
          "mt-[100px] px-[30px] sm:px-[70px] lg:px-[160px] min-h-[70vh]"
        }
      >
        <div className={"flex flex-row justify-start items-center"}>
          <h3>Tasks List </h3>
          <span className="font-bold text-mainLightBlue text-[80px] md:text-[120px] ml-8">
            &gt;
          </span>
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

      {showModal && <Modal modalTitle={"Update Task"} />}
      <Footer />
    </>
  );
};
