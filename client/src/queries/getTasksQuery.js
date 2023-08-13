import { gql } from "@apollo/client";

export const GET_TASKS = gql`
  query getTasks {
    tasks {
      id
      status
      taskTitle
      taskDescription
      priority
      dateCreated
      user {
        userName
      }
    }
  }
`;
