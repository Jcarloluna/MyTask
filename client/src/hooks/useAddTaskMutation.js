import { useMutation } from "@apollo/client";
import { GET_TASKS } from "../queries/getTasksQuery";
import { ADD_TASK } from "../mutations/addTaskMutation";

export const useAddTaskMutation = (userId, taskTitle, status) => {
  const [addTask, { loading, error, data }] = useMutation(ADD_TASK, {
    variables: {
      userId: userId,
      taskTitle: taskTitle,
      status: status,
    },
    errorPolicy: "all",
    refetchQueries: [{ query: GET_TASKS }],
  });

  return {
    addTask,
    data,
    loading,
    error,
  };
};
