/* eslint-disable */
import { DocumentTypeDecoration } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Time: { input: any; output: any };
};

export type Article = {
  __typename?: "Article";
  description: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  status: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export enum ArticleStatuses {
  Deleted = "Deleted",
  Draft = "Draft",
  OnHold = "OnHold",
  Published = "Published",
  UnderReview = "UnderReview",
}

export type Category = {
  __typename?: "Category";
  Classification: Scalars["String"]["output"];
};

export type CreateEntryRequest = {
  credits?: InputMaybe<Array<InputMaybe<CreditInput>>>;
  date?: InputMaybe<Scalars["String"]["input"]>;
  debits?: InputMaybe<Array<InputMaybe<DebitInput>>>;
  description?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreatePayment = {
  categoryName: Scalars["String"]["input"];
  cost: Scalars["Int"]["input"];
  label: Scalars["String"]["input"];
  paymentAt: Scalars["Time"]["input"];
  paymentType: Scalars["String"]["input"];
  userId: Scalars["Int"]["input"];
};

export type CreatePredictCost = {
  amount: Scalars["Int"]["input"];
  categoryName: Scalars["String"]["input"];
  label: Scalars["String"]["input"];
  userId: Scalars["Int"]["input"];
};

export type CreateTodo = {
  status?: InputMaybe<StatusPattern>;
  text: Scalars["String"]["input"];
  userId: Scalars["Int"]["input"];
};

export type Credit = {
  __typename?: "Credit";
  account_name?: Maybe<Scalars["String"]["output"]>;
  amount?: Maybe<Scalars["Float"]["output"]>;
};

export type CreditInput = {
  account_name?: InputMaybe<Scalars["String"]["input"]>;
  amount?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Debit = {
  __typename?: "Debit";
  account_name?: Maybe<Scalars["String"]["output"]>;
  amount?: Maybe<Scalars["Float"]["output"]>;
};

export type DebitInput = {
  accountName?: InputMaybe<Scalars["String"]["input"]>;
  amount?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Entry = {
  __typename?: "Entry";
  credits?: Maybe<Array<Maybe<Credit>>>;
  date: Scalars["Time"]["output"];
  debits?: Maybe<Array<Maybe<Debit>>>;
  description: Scalars["String"]["output"];
};

export type Item = {
  __typename?: "Item";
  categoryName: Scalars["String"]["output"];
  cost: Scalars["Int"]["output"];
  createdAt: Scalars["Time"]["output"];
  id: Scalars["ID"]["output"];
  label: Scalars["String"]["output"];
  updatedAt: Scalars["Time"]["output"];
  user: User;
};

export type Mutation = {
  __typename?: "Mutation";
  createEnty: Entry;
  createPayment: Payment;
  createPredictCost: PredictCost;
  createTodo: Todo;
  createUser: User;
  deletePredictCost: Scalars["Boolean"]["output"];
  updateTodo: Todo;
};

export type MutationCreateEntyArgs = {
  input: CreateEntryRequest;
};

export type MutationCreatePaymentArgs = {
  input: CreatePayment;
};

export type MutationCreatePredictCostArgs = {
  input: CreatePredictCost;
};

export type MutationCreateTodoArgs = {
  input: CreateTodo;
};

export type MutationCreateUserArgs = {
  input: NewUser;
};

export type MutationDeletePredictCostArgs = {
  predictCostId: Scalars["Int"]["input"];
};

export type MutationUpdateTodoArgs = {
  input: UpdateTodo;
};

export type NewUser = {
  name: Scalars["String"]["input"];
};

export type Payment = {
  __typename?: "Payment";
  categoryName: Scalars["String"]["output"];
  cost: Scalars["Int"]["output"];
  createAt: Scalars["Time"]["output"];
  id: Scalars["ID"]["output"];
  label: Scalars["String"]["output"];
  paymentAt: Scalars["Time"]["output"];
  paymentType: Scalars["String"]["output"];
  updateAt: Scalars["Time"]["output"];
  userID: Scalars["Int"]["output"];
};

export type PaymentType = {
  __typename?: "PaymentType";
  label: Scalars["String"]["output"];
};

export type PredictCost = {
  __typename?: "PredictCost";
  amount: Scalars["Int"]["output"];
  categoryName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  label: Scalars["String"]["output"];
};

export type Query = {
  __typename?: "Query";
  articles: Array<Article>;
  categories: Array<Category>;
  entry: Entry;
  items: Array<Item>;
  paymentTypes: Array<PaymentType>;
  payments: Array<Payment>;
  predictCosts: Array<PredictCost>;
  todo: Todo;
  todos: Array<Todo>;
};

export type QueryArticlesArgs = {
  status: ArticleStatuses;
};

export type QueryEntryArgs = {
  ID: Scalars["Int"]["input"];
};

export type QueryItemsArgs = {
  userId: Scalars["Int"]["input"];
};

export type QueryPaymentsArgs = {
  userId: Scalars["Int"]["input"];
};

export type QueryPredictCostsArgs = {
  userId: Scalars["Int"]["input"];
};

export type QueryTodoArgs = {
  ID: Scalars["Int"]["input"];
};

export type QueryTodosArgs = {
  userId: Scalars["Int"]["input"];
};

export enum StatusPattern {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING",
}

export type Todo = {
  __typename?: "Todo";
  content: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  user: User;
};

export type UpdateTodo = {
  ID: Scalars["Int"]["input"];
  status?: InputMaybe<StatusPattern>;
  text: Scalars["String"]["input"];
  userId: Scalars["Int"]["input"];
};

export type User = {
  __typename?: "User";
  email: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
};

export type GetAllPaymentQueryQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllPaymentQueryQuery = {
  __typename?: "Query";
  payments: Array<{
    __typename?: "Payment";
    id: string;
    label: string;
    categoryName: string;
    cost: number;
    paymentType: string;
    paymentAt: any;
  }>;
};

export type GetAllPredictCostQueryQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetAllPredictCostQueryQuery = {
  __typename?: "Query";
  predictCosts: Array<{
    __typename?: "PredictCost";
    id: string;
    label: string;
    categoryName: string;
    amount: number;
  }>;
};

export type CreatePredictCostMutationMutationVariables = Exact<{
  input: CreatePredictCost;
}>;

export type CreatePredictCostMutationMutation = {
  __typename?: "Mutation";
  createPredictCost: {
    __typename?: "PredictCost";
    id: string;
    label: string;
    categoryName: string;
    amount: number;
  };
};

export type DeletePredictCostMutationMutationVariables = Exact<{
  predictCostId: Scalars["Int"]["input"];
}>;

export type DeletePredictCostMutationMutation = {
  __typename?: "Mutation";
  deletePredictCost: boolean;
};

export type FindTodoByIdQueryQueryVariables = Exact<{
  id: Scalars["Int"]["input"];
}>;

export type FindTodoByIdQueryQuery = {
  __typename?: "Query";
  todo: {
    __typename?: "Todo";
    id: string;
    user: { __typename?: "User" } & {
      " $fragmentRefs"?: { UserItemFragment: UserItemFragment };
    };
  };
};

export type UserItemFragment = {
  __typename?: "User";
  id: string;
  name: string;
} & { " $fragmentName"?: "UserItemFragment" };

export type GetAllTodoByUserIdQueryQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetAllTodoByUserIdQueryQuery = {
  __typename?: "Query";
  todos: Array<{ __typename?: "Todo"; id: string }>;
};

export type CreateTodoMutationMutationVariables = Exact<{
  input: CreateTodo;
}>;

export type CreateTodoMutationMutation = {
  __typename?: "Mutation";
  createTodo: { __typename?: "Todo"; id: string; content: string };
};

export type GetAllCategoryQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllCategoryQuery = {
  __typename?: "Query";
  categories: Array<{ __typename?: "Category"; Classification: string }>;
};

export type CreatePaymentMutationMutationVariables = Exact<{
  input: CreatePayment;
}>;

export type CreatePaymentMutationMutation = {
  __typename?: "Mutation";
  createPayment: {
    __typename?: "Payment";
    id: string;
    cost: number;
    paymentAt: any;
  };
};

export type GetAllPaymentTypeQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllPaymentTypeQuery = {
  __typename?: "Query";
  paymentTypes: Array<{ __typename?: "PaymentType"; label: string }>;
};

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>["__apiType"];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const UserItemFragmentDoc = new TypedDocumentString(
  `
    fragment UserItem on User {
  id
  name
}
    `,
  { fragmentName: "UserItem" }
) as unknown as TypedDocumentString<UserItemFragment, unknown>;
export const GetAllPaymentQueryDocument = new TypedDocumentString(`
    query getAllPaymentQuery {
  payments(userId: 1) {
    id
    label
    categoryName
    cost
    paymentType
    paymentAt
  }
}
    `) as unknown as TypedDocumentString<
  GetAllPaymentQueryQuery,
  GetAllPaymentQueryQueryVariables
>;
export const GetAllPredictCostQueryDocument = new TypedDocumentString(`
    query getAllPredictCostQuery {
  predictCosts(userId: 1) {
    id
    label
    categoryName
    amount
  }
}
    `) as unknown as TypedDocumentString<
  GetAllPredictCostQueryQuery,
  GetAllPredictCostQueryQueryVariables
>;
export const CreatePredictCostMutationDocument = new TypedDocumentString(`
    mutation createPredictCostMutation($input: CreatePredictCost!) {
  createPredictCost(input: $input) {
    id
    label
    categoryName
    amount
  }
}
    `) as unknown as TypedDocumentString<
  CreatePredictCostMutationMutation,
  CreatePredictCostMutationMutationVariables
>;
export const DeletePredictCostMutationDocument = new TypedDocumentString(`
    mutation deletePredictCostMutation($predictCostId: Int!) {
  deletePredictCost(predictCostId: $predictCostId)
}
    `) as unknown as TypedDocumentString<
  DeletePredictCostMutationMutation,
  DeletePredictCostMutationMutationVariables
>;
export const FindTodoByIdQueryDocument = new TypedDocumentString(`
    query findTodoByIdQuery($id: Int!) {
  todo(ID: $id) {
    id
    user {
      ...UserItem
    }
  }
}
    fragment UserItem on User {
  id
  name
}`) as unknown as TypedDocumentString<
  FindTodoByIdQueryQuery,
  FindTodoByIdQueryQueryVariables
>;
export const GetAllTodoByUserIdQueryDocument = new TypedDocumentString(`
    query getAllTodoByUserIdQuery {
  todos(userId: 1) {
    id
  }
}
    `) as unknown as TypedDocumentString<
  GetAllTodoByUserIdQueryQuery,
  GetAllTodoByUserIdQueryQueryVariables
>;
export const CreateTodoMutationDocument = new TypedDocumentString(`
    mutation createTodoMutation($input: CreateTodo!) {
  createTodo(input: $input) {
    id
    content
  }
}
    `) as unknown as TypedDocumentString<
  CreateTodoMutationMutation,
  CreateTodoMutationMutationVariables
>;
export const GetAllCategoryDocument = new TypedDocumentString(`
    query getAllCategory {
  categories {
    Classification
  }
}
    `) as unknown as TypedDocumentString<
  GetAllCategoryQuery,
  GetAllCategoryQueryVariables
>;
export const CreatePaymentMutationDocument = new TypedDocumentString(`
    mutation createPaymentMutation($input: CreatePayment!) {
  createPayment(input: $input) {
    id
    cost
    paymentAt
  }
}
    `) as unknown as TypedDocumentString<
  CreatePaymentMutationMutation,
  CreatePaymentMutationMutationVariables
>;
export const GetAllPaymentTypeDocument = new TypedDocumentString(`
    query getAllPaymentType {
  paymentTypes {
    label
  }
}
    `) as unknown as TypedDocumentString<
  GetAllPaymentTypeQuery,
  GetAllPaymentTypeQueryVariables
>;
