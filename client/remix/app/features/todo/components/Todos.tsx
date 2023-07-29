import { useGetAllTodoByUserId } from "../hooks/useGetAllTodoByUserId";

export const Todos = () => {
  const { todos } = useGetAllTodoByUserId();
  return (
    <>
      <ul>
        {todos &&
          todos.data?.todos.map((todo) => <li key={todo.id}>{todo.id}</li>)}
      </ul>
    </>
  );
};
