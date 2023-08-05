import { GET_TASKS } from "../queries/getTasksQuery";
import { useQuery } from "@apollo/client";

export const useGetTasksQuery = () => {
  const { loading, error, data } = useQuery(GET_TASKS, {
    errorPolicy: "all",
  });

  return {
    data,
    loading,
    error,
  };
};
