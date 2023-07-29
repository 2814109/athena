import { FragmentType, graphql, useFragment } from "../gql";

import { useGraphQL } from "../fetcher/use-graphql";
import { useCreateTodo } from "./todo/hooks/useCreateTodo";

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

      {data && <ul>{data.data?.todo.user.__typename}</ul>}
      {data && <UserComponent user={data.data?.todo?.user} />}
    </>
  );
}

const UserComponent = (props: {
  /* `film` property has the correct type 🎉 */
  user?: FragmentType<typeof userFragment>;
}) => {
  const user = useFragment(userFragment, props.user);

  return <h1>{user?.username}</h1>;
};
