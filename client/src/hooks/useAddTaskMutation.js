import { useMutation } from "@apollo/client";
import { GET_TASKS } from "../queries/getTasksQuery";
import { ADD_TASK } from "../mutations/addTaskMutation";
import { TASK_STATUS_OPTIONS } from "../constants/tasks";

export const useAddTaskMutation = () => {
  const [callback, { loading, error, data }] = useMutation(ADD_TASK);

  const addTask = (taskTitle, taskDescription, taskStatus, taskPriority) => {
    return callback({
      variables: {
        userId: "64cdb000a72b2082562fceda",
        taskTitle: taskTitle,
        taskDescription: taskDescription,
        status: taskStatus,
        priority: taskPriority,
      },
      errorPolicy: "all",
      refetchQueries: [{ query: GET_TASKS }],
    });
  };

  return {
    addTask,
    data,
    loading,
    error,
  };
};
