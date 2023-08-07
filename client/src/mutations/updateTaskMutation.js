import { gql } from "@apollo/client";

export const UPDATE_TASK = gql`
  mutation updateTask(
    $id: ID!
    $taskTitle: String!
    $status: TaskStatusUpdate!
  ) {
    updateTask(id: $id, taskTitle: $taskTitle, status: $status) {
      id
      taskTitle
      status
      user {
        userName
      }
    }
  }
`;
