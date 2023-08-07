import { gql } from "@apollo/client";

export const ADD_TASK = gql`
  mutation addTask($userId: ID!, $taskTitle: String!, $status: TaskStatus) {
    addTask(userId: $userId, taskTitle: $taskTitle, status: $status) {
      id
      taskTitle
      user {
        userName
      }
    }
  }
`;
