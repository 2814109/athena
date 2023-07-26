import { graphql } from "./gql";
// import type { LinksFunction } from "@remix-run/node";

import { useGraphQL } from "./fetcher/use-graphql";
import { useMutation } from "@tanstack/react-query";
import { endpoint } from "config";
import { GraphQLClient } from "graphql-request";
import { ArticleStatuses, StatusPattern } from "./gql/graphql";

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

// export const FilmFragment = graphql(/* GraphQL */ `
//   fragment FilmItem on Film {
//     id
//     title
//     releaseDate
//     producers
//   }
// `);

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
  const mutationKey = ["graphql", "create", "todo"];

  const mutation = useMutation({
    mutationKey,
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
