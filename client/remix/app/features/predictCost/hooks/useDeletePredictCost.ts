import { graphql } from "~/gql";
import { useMutation } from "@tanstack/react-query";
import { endpoint } from "config";
import { GraphQLClient } from "graphql-request";
import { useGetAllPredictCost } from "./useAllPredictCost";


const deletePredictCostDocuments = graphql(`
mutation deletePredictCostMutation($predictCostId:Int!){
  deletePredictCost(predictCostId: $predictCostId)
}
`)



export const useDeletePredictCost = () => {
    const {refetch} =useGetAllPredictCost()
      const graphQLClient = new GraphQLClient(endpoint, { method: "POST" });

  const mutation = useMutation({
    mutationKey: [deletePredictCostDocuments.__meta__],
    mutationFn: (input: number) => {
      return graphQLClient.request(deletePredictCostDocuments.valueOf(), {
        predictCostId: input,
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