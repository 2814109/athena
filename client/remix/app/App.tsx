import { graphql } from "./gql";

import { useGraphQL } from "./fetcher/use-graphql";
import { useCreateTodo } from "./features/hooks/useCreateTodo";

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

  const { mutation } = useCreateTodo();

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
