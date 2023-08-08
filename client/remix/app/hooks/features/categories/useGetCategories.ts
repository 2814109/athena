import { graphql } from "~/gql/gql";

import { useGraphQL } from "~/fetcher/use-graphql";

const getCategories = graphql(`
query getAllCategory{
  categories{
    Classification
  }
}
`);


export const useGetCategories = () => {
const {data: categories} = useGraphQL(getCategories)
  return {categories}
}