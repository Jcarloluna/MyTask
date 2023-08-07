import { useMutation } from "@apollo/client";
import { GET_TASKS } from "../queries/getTasksQuery";
import { ADD_TASK } from "../mutations/addTaskMutation";
import { TASK_STATUS_OPTIONS } from "../constants/tasks";

export const useAddTaskMutation = () => {
  const [callback, { loading, error, data }] = useMutation(ADD_TASK);

  const addTask = (userId, taskTitle, taskStatus) => {
    return callback({
      variables: {
        userId: userId,
        taskTitle: taskTitle,
        status: taskStatus,
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
