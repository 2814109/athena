import { useMutation } from "@tanstack/react-query";
import { endpoint } from "config";
import { GraphQLClient } from "graphql-request";
import { graphql } from "~/gql"

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
    mutationFn: () => {
      return graphQLClient.request(createPredictCostDocuments.valueOf(), {
        input: {amount:100, categoryName:"食料品", label: "ご飯",userId: 1 },
      });
    },
    onSuccess: () => {
      return null;
    },
  });
  return {mutation}
}