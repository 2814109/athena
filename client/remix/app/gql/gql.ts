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
  "\nmutation deletePaymentMutation($paymentId:Int!){\n  deletePayment(paymentId: $paymentId)\n}\n":
    types.DeletePaymentMutationDocument,
  "\n    query getAllPaymentQuery{\n        payments(userId: 1){\n            id\n            label\n            categoryName\n            cost\n            paymentType\n            paymentAt\n        }\n    }\n":
    types.GetAllPaymentQueryDocument,
  "\n    query getAllPredictCostQuery{\n        predictCosts(userId: 1){\n            id\n            label\n            categoryName\n            amount\n    } \n}\n":
    types.GetAllPredictCostQueryDocument,
  "\nmutation createPredictCostMutation($input: CreatePredictCost!){\n  createPredictCost(input: $input){\n    id\n    label\n    categoryName\n    amount\n  }\n}\n":
    types.CreatePredictCostMutationDocument,
  "\nmutation deletePredictCostMutation($predictCostId:Int!){\n  deletePredictCost(predictCostId: $predictCostId)\n}\n":
    types.DeletePredictCostMutationDocument,
  "\n  query findTodoByIdQuery($id: Int!) {\n    todo(ID: $id) {\n      id\n      user {\n        ...UserItem\n      }\n    }\n  }\n":
    types.FindTodoByIdQueryDocument,
  "\n  fragment UserItem on User {\n    id\n    name\n  }\n":
    types.UserItemFragmentDoc,
  "\n  query getAllTodoByUserIdQuery {\n    todos(userId: 1) {\n      id\n    }\n  }\n":
    types.GetAllTodoByUserIdQueryDocument,
  "\n  mutation createTodoMutation($input: CreateTodo!) {\n    createTodo(input: $input) {\n      id\n      content\n    }\n  }\n":
    types.CreateTodoMutationDocument,
  "\nquery getAllCategory{\n  categories{\n    Classification\n  }\n}\n":
    types.GetAllCategoryDocument,
  "\n    mutation createPaymentMutation($input: CreatePayment!){\n    createPayment(input: $input) {\n        id\n        cost\n        paymentAt\n    }\n    }\n":
    types.CreatePaymentMutationDocument,
  "\n    query getAllPaymentType{\n        paymentTypes{\n            label\n        }\n}\n":
    types.GetAllPaymentTypeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\nmutation deletePaymentMutation($paymentId:Int!){\n  deletePayment(paymentId: $paymentId)\n}\n"
): typeof import("./graphql").DeletePaymentMutationDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n    query getAllPaymentQuery{\n        payments(userId: 1){\n            id\n            label\n            categoryName\n            cost\n            paymentType\n            paymentAt\n        }\n    }\n"
): typeof import("./graphql").GetAllPaymentQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n    query getAllPredictCostQuery{\n        predictCosts(userId: 1){\n            id\n            label\n            categoryName\n            amount\n    } \n}\n"
): typeof import("./graphql").GetAllPredictCostQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\nmutation createPredictCostMutation($input: CreatePredictCost!){\n  createPredictCost(input: $input){\n    id\n    label\n    categoryName\n    amount\n  }\n}\n"
): typeof import("./graphql").CreatePredictCostMutationDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\nmutation deletePredictCostMutation($predictCostId:Int!){\n  deletePredictCost(predictCostId: $predictCostId)\n}\n"
): typeof import("./graphql").DeletePredictCostMutationDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query findTodoByIdQuery($id: Int!) {\n    todo(ID: $id) {\n      id\n      user {\n        ...UserItem\n      }\n    }\n  }\n"
): typeof import("./graphql").FindTodoByIdQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment UserItem on User {\n    id\n    name\n  }\n"
): typeof import("./graphql").UserItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query getAllTodoByUserIdQuery {\n    todos(userId: 1) {\n      id\n    }\n  }\n"
): typeof import("./graphql").GetAllTodoByUserIdQueryDocument;
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
  source: "\nquery getAllCategory{\n  categories{\n    Classification\n  }\n}\n"
): typeof import("./graphql").GetAllCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n    mutation createPaymentMutation($input: CreatePayment!){\n    createPayment(input: $input) {\n        id\n        cost\n        paymentAt\n    }\n    }\n"
): typeof import("./graphql").CreatePaymentMutationDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n    query getAllPaymentType{\n        paymentTypes{\n            label\n        }\n}\n"
): typeof import("./graphql").GetAllPaymentTypeDocument;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
