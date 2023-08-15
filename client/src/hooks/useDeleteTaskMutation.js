import { useMutation } from "@apollo/client";
import { GET_TASKS } from "../queries/getTasksQuery";
import { DELETE_TASK } from "../mutations/deleteTaskMutation";

export const useDeleteTaskMutation = () => {
  const [callback, { loading, error, data }] = useMutation(DELETE_TASK);

  const deleteTask = (id) => {
    callback({
      variables: { id: id },
      errorPolicy: "all",
      skip: id === null,
      refetchQueries: [{ query: GET_TASKS }],
    });
  };
  return {
    deleteTask,
    data,
    loading,
    error,
  };
};
