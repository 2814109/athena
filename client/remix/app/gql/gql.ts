/* eslint-disable */
import * as types from "./graphql";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "\n  query findTodoByIdQuery($id: Int!) {\n    todo(ID: $id) {\n      id\n    }\n  }\n":
    types.FindTodoByIdQueryDocument,
  "\n  mutation createTodoMutation($input: CreateTodo!) {\n    createTodo(input: $input) {\n      id\n      content\n    }\n  }\n":
    types.CreateTodoMutationDocument,
  "\n  query getAllTodoByUserIdQuery {\n    todos(userId: 1) {\n      id\n    }\n  }\n":
    types.GetAllTodoByUserIdQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query findTodoByIdQuery($id: Int!) {\n    todo(ID: $id) {\n      id\n    }\n  }\n"
): typeof import("./graphql").FindTodoByIdQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation createTodoMutation($input: CreateTodo!) {\n    createTodo(input: $input) {\n      id\n      content\n    }\n  }\n"
): typeof import("./graphql").CreateTodoMutationDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query getAllTodoByUserIdQuery {\n    todos(userId: 1) {\n      id\n    }\n  }\n"
): typeof import("./graphql").GetAllTodoByUserIdQueryDocument;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
