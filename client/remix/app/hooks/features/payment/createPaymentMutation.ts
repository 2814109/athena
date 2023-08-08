import { useMutation } from "@tanstack/react-query";
import { endpoint } from "config";
import { GraphQLClient } from "graphql-request";
import { CreatePayment } from "~/gql/graphql";

import { graphql } from "~/gql"

const createPaymentDocuments = graphql(`
    mutation createPaymentMutation{
    createPayment(input: {cost:100, categoryName:"食料品", label: "ご飯",userId: 1,paymentType: "Cash", paymentAt: "2023-08-08" }) {
        id
        cost
        paymentAt
    }
    }
`)

export const useCreatePayment = () => {
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
        //   refetch()
      return null;
    },
  });
  return {mutation}



}
