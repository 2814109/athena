import { graphql } from "~/gql";
import { useMutation } from "@tanstack/react-query";
import { endpoint } from "config";
import { GraphQLClient } from "graphql-request";
import { useGetAllPayment } from "./useGetAllPayment";

const deletePaymentDocuments = graphql(`
mutation deletePaymentMutation($paymentId:Int!){
  deletePayment(paymentId: $paymentId)
}
`)

export const useDeletePayment = () => {
    const {refetch} =useGetAllPayment()
      const graphQLClient = new GraphQLClient(endpoint, { method: "POST" });

  const mutation = useMutation({
    mutationKey: [deletePaymentDocuments.__meta__],
    mutationFn: (input: number) => {
      return graphQLClient.request(deletePaymentDocuments.valueOf(), {
        paymentId: input,
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