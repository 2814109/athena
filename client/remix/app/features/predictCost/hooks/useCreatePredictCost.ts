import { useMutation } from "@tanstack/react-query";
import { endpoint } from "config";
import { GraphQLClient } from "graphql-request";
import { graphql } from "~/gql"
import { CreatePredictCost } from "~/gql/graphql";

const createPredictCostDocuments = graphql(`
mutation createPredictCostMutation($input: CreatePredictCost!){
  createPredictCost(input: $input){
    id
  }
}
`)



export const useCreatePredictCost = () => {
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
      return null;
    },
  });
  return {mutation}
}