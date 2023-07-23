import { graphql } from "./gql";
// import type { LinksFunction } from "@remix-run/node";

import { useGraphQL } from "./fetcher/use-graphql";
import { useMutation } from "@tanstack/react-query";
import { endpoint } from "config";
import { gql, request } from "graphql-request";

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
    }
  }
`);

export default function App() {
  const { data } = useGraphQL(findTodoByIdDocuments, {
    id: 1,
  });

  // const mutation = useMutationGraphQL(createTodoDocuments);
  // console.log(mutation);
  return (
    <>
      {data && <ul>{data.data?.todo.id}</ul>}
      {/* <button type="button" onClick={() => mutation}>
        Submit
      </button> */}
    </>
  );
}
