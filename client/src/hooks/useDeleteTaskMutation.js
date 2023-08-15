import { useMutation } from "@apollo/client";
import { GET_TASKS } from "../queries/getTasksQuery";
import { DELETE_TASK } from "../mutations/deleteTaskMutation";

export const useUpdateTaskMutation = (id) => {
  const [deleteTask, { loading, error, data }] = useMutation(DELETE_TASK, {
    variables: { id: id },
    errorPolicy: "all",
    skip: id === null,
    refetchQueries: [{ query: GET_TASKS, variables: { id: id } }],
  });

  return {
    deleteTask,
    data,
    loading,
    error,
  };
};
