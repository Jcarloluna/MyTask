import { useMutation } from "@apollo/client";
import { GET_TASK } from "../queries/getTaskQuery";
import { UPDATE_TASK } from "../mutations/updateTaskMutation";

export const useUpdateTaskMutation = (id, taskTitle, status) => {
  const [updateTask, { loading, error, data }] = useMutation(UPDATE_TASK, {
    variables: { id: id, taskTitle: taskTitle, status: status },
    errorPolicy: "all",
    skip: id === null,
    refetchQueries: [{ query: GET_TASK, variables: { id: id } }],
  });

  return {
    updateTask,
    data,
    loading,
    error,
  };
};
