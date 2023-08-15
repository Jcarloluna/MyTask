import { gql } from "@apollo/client";

export const GET_TASK = gql`
  query getTask($id: ID!) {
    task(id: $id) {
      taskTitle
      taskDescription
      status
      priority
      dateCreated
    }
  }
`;
