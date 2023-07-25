import { graphql } from "./gql";
// import type { LinksFunction } from "@remix-run/node";

import { useGraphQL } from "./fetcher/use-graphql";
import { useMutation } from "@tanstack/react-query";
import { endpoint } from "config";
import { GraphQLClient } from "graphql-request";

// const allFilmsWithVariablesQueryDocument = graphql(/* GraphQL */ `
//   query allFilmsWithVariablesQuery($first: Int!) {
//     allFilms(first: $first) {
//       edges {
//         node {
//           ...FilmItem
//         }
//       }
//     }
//   }
// `);

const findTodoByIdDocuments = graphql(`
  query findTodoByIdQuery($id: Int!) {
    todo(ID: $id) {
      id
    }
  }
`);

const createTodoDocuments = graphql(`
  mutation createTodoMutation {
    createTodo(input: { status: ACTIVE, text: "test", userId: 1 }) {
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
  const mutationKey = ["graphql", "create", "user"];

  const mutation = useMutation({
    mutationKey,
    mutationFn: () => {
      return graphQLClient.request(createTodoDocuments.valueOf());
    },
    onSuccess: () => {
      return null;
    },
  });
  console.log(mutation.data);

  // const mutation = useMutationGraphQL(createTodoDocuments);
  // console.log(mutation);
  return (
    <>
      <ul> {todos && todos.data?.todos.map((todo) => <li>{todo.id}</li>)}</ul>

      <button type="button" onClick={() => mutation.mutate()}>
        Submit
      </button>
      {data && <ul>{data.data?.todo.id}</ul>}
    </>
  );
}
