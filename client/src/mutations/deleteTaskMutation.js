import { gql } from "@apollo/client";

export const DELETE_TASK = gql`
  mutation deleteTask($id: ID!) {
    deleteTask(id: $id) {
      id
      status
      taskTitle
      taskDescription
      dateCreated
      priority
      user {
        userName
      }
    }
  }
`;
