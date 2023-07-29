import { graphql } from "~/gql";
import { useGraphQL } from "~/fetcher/use-graphql";


const getAllTodoByUserIdDocuments = graphql(`
  query getAllTodoByUserIdQuery {
    todos(userId: 1) {
      id
    }
  }
`);

export const useGetAllTodoByUserId = () => {
  const { data: todos } = useGraphQL(getAllTodoByUserIdDocuments);

  return {todos}


}