import { graphql } from "./gql";

import { useGraphQL } from "./fetcher/use-graphql";
import { useMutation } from "@tanstack/react-query";
import { endpoint } from "config";
import { GraphQLClient } from "graphql-request";
import { StatusPattern } from "./gql/graphql";

const findTodoByIdDocuments = graphql(`
  query findTodoByIdQuery($id: Int!) {
    todo(ID: $id) {
      id
      user {
        ...UserItem
      }
    }
  }
`);

const userFragment = graphql(`
  fragment UserItem on User {
    id
    username
  }
`);

const createTodoDocuments = graphql(`
  mutation createTodoMutation($input: CreateTodo!) {
    createTodo(input: $input) {
      id
      content
    }
  }
`);

const getAllTodoByUserIdDocuments = graphql(`
  query getAllTodoByUserIdQuery {
    todos(userId: 1) {
      id
    }
  }
`);

export default function App() {
  const { data } = useGraphQL(findTodoByIdDocuments, {
    id: 1,
  });

  const { data: todos } = useGraphQL(getAllTodoByUserIdDocuments);

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
  console.log(mutation.data);

  return (
    <>
      <ul>
        {todos &&
          todos.data?.todos.map((todo) => <li key={todo.id}>{todo.id}</li>)}
      </ul>

      <button type="button" onClick={() => mutation.mutate()}>
        Submit
      </button>
      {data && <ul>{data.data?.todo.id}</ul>}
    </>
  );
}
