import { graphql } from "~/gql";
import { useGraphQL } from "~/fetcher/use-graphql";

const getAllTodoByUserIdDocuments = graphql(`
  query getAllTodoByUserIdQuery {
    todos(userId: 1) {
      id
    }
  }
`);

export const Todos = () => {
  const { data: todos } = useGraphQL(getAllTodoByUserIdDocuments);

  return (
    <>
      <ul>
        {todos &&
          todos.data?.todos.map((todo) => <li key={todo.id}>{todo.id}</li>)}
      </ul>
    </>
  );
};
