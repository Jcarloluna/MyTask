import { useMutation } from "@apollo/client";
import { GET_TASKS } from "../queries/getTasksQuery";
import { UPDATE_TASK } from "../mutations/updateTaskMutation";

export const useUpdateTaskMutation = () => {
  const [callback, { loading, error, data }] = useMutation(UPDATE_TASK);

  const updateTask = (
    id,
    taskTitle,
    taskDescription,
    taskStatus,
    taskPriority
  ) => {
    return callback({
      variables: {
        id: id,
        taskTitle: taskTitle,
        taskDescription: taskDescription,
        status: taskStatus,
        priority: taskPriority,
      },
      errorPolicy: "all",
      skip: id === null,
      refetchQueries: [{ query: GET_TASKS }],
    });
  };

  return {
    updateTask,
    data,
    loading,
    error,
  };
};
