import { useMutation } from "@tanstack/react-query";
import { endpoint } from "config";
import { GraphQLClient } from "graphql-request";
import { CreatePayment } from "~/gql/graphql";

import { graphql } from "~/gql"
import { useGetAllPayment } from "~/features/monthly/hooks/useGetAllPayment";

const createPaymentDocuments = graphql(`
    mutation createPaymentMutation($input: CreatePayment!){
    createPayment(input: $input) {
        id
        cost
        paymentAt
    }
    }
`)

export const useCreatePayment = () => {
    const { refetch } = useGetAllPayment();

      const graphQLClient = new GraphQLClient(endpoint, { method: "POST" });

  const mutation = useMutation({
    mutationKey: [createPaymentDocuments.__meta__],
    mutationFn: (input:CreatePayment) => {
      return graphQLClient.request(createPaymentDocuments.valueOf(), {
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
