import { gql } from "@apollo/client";

export const ADD_TASK = gql`
  mutation addTask(
    $userId: ID!
    $taskTitle: String!
    $taskDescription: String!
    $status: TaskStatus
    $priority: TaskPriority
  ) {
    addTask(
      userId: $userId
      taskTitle: $taskTitle
      taskDescription: $taskDescription
      status: $status
      priority: $priority
    ) {
      id
      taskTitle
      user {
        userName
      }
    }
  }
`;
