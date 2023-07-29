import { useMutation } from "@tanstack/react-query";
import { endpoint } from "config";
import { GraphQLClient } from "graphql-request";
import { StatusPattern } from "~/gql/graphql";
import { graphql } from "~/gql";

const createTodoDocuments = graphql(`
  mutation createTodoMutation($input: CreateTodo!) {
    createTodo(input: $input) {
      id
      content
    }
  }
`);

export const useCreateTodo = () => {
      const graphQLClient = new GraphQLClient(endpoint, { method: "POST" });

  const mutation = useMutation({
    mutationKey: [createTodoDocuments.__meta__],
    mutationFn: () => {
      return graphQLClient.request(createTodoDocuments.valueOf(), {
        input: {
          status: StatusPattern.Active,
          text: "testwww",
          userId: 1,
        },
      });
    },
    onSuccess: () => {
      return null;
    },
  });
  return {mutation}
}