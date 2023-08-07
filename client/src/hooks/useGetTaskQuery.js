import { GET_TASK } from "../queries/getTaskQuery";
import { useQuery } from "@apollo/client";

export const useGetTaskQuery = (id) => {
  const { loading, error, data } = useQuery(GET_TASK, {
    variables: { id },
    errorPolicy: "all",
    skip: id === null,
  });

  return {
    data,
    loading,
    error,
  };
};
