import { gql } from "@apollo/client";

export const UPDATE_TASK = gql`
  mutation updateTask(
    $id: ID!
    $taskTitle: String!
    $taskDescription: String
    $status: TaskStatusUpdate!
    $priority: TaskPriorityUpdate!
  ) {
    updateTask(
      id: $id
      taskTitle: $taskTitle
      taskDescription: $taskDescription
      status: $status
      priority: $priority
    ) {
      id
      taskTitle
      taskDescription
      status
      priority
      user {
        userName
      }
    }
  }
`;
