import { useMutation } from "@tanstack/react-query";
import { endpoint } from "config";
import { GraphQLClient } from "graphql-request";
import { graphql } from "~/gql"
import { CreatePredictCost } from "~/gql/graphql";
import { useGetAllPredictCost } from "./useAllPredictCost";

const createPredictCostDocuments = graphql(`
mutation createPredictCostMutation($input: CreatePredictCost!){
  createPredictCost(input: $input){
    id
    label
    categoryName
    amount
  }
}
`)

export const useCreatePredictCost = () => {
    const {refetch} =useGetAllPredictCost()
      const graphQLClient = new GraphQLClient(endpoint, { method: "POST" });

  const mutation = useMutation({
    mutationKey: [createPredictCostDocuments.__meta__],
    mutationFn: (input:CreatePredictCost) => {
      return graphQLClient.request(createPredictCostDocuments.valueOf(), {
        input: input,
      });
    },
      onSuccess: (response) => {
          console.log(response)
          refetch()
      return null;
    },
  });
  return {mutation}
}