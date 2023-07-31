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
  Date: { input: any; output: any };
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
  date: Scalars["Date"]["output"];
  debits?: Maybe<Array<Maybe<Debit>>>;
  description: Scalars["String"]["output"];
};

export type Item = {
  __typename?: "Item";
  categoryName: Scalars["String"]["output"];
  cost: Scalars["Int"]["output"];
  createdAt: Scalars["Date"]["output"];
  id: Scalars["ID"]["output"];
  label: Scalars["String"]["output"];
  updatedAt: Scalars["Date"]["output"];
  user: User;
};

export type Mutation = {
  __typename?: "Mutation";
  createEnty: Entry;
  createPredictCost: PredictCost;
  createTodo: Todo;
  createUser: User;
  updateTodo: Todo;
};

export type MutationCreateEntyArgs = {
  input: CreateEntryRequest;
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

export type MutationUpdateTodoArgs = {
  input: UpdateTodo;
};

export type NewUser = {
  name: Scalars["String"]["input"];
};

export type PredictCost = {
  __typename?: "PredictCost";
  Amount: Scalars["Int"]["output"];
  categoryName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  label: Scalars["String"]["output"];
};

export type Query = {
  __typename?: "Query";
  articles: Array<Article>;
  categories?: Maybe<Array<Category>>;
  entry: Entry;
  items: Array<Item>;
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

export type GetAllCategoryQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllCategoryQuery = {
  __typename?: "Query";
  categories?: Array<{
    __typename?: "Category";
    Classification: string;
  }> | null;
};

export type CreateTodoMutationMutationVariables = Exact<{
  input: CreateTodo;
}>;

export type CreateTodoMutationMutation = {
  __typename?: "Mutation";
  createTodo: { __typename?: "Todo"; id: string; content: string };
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
