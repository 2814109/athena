import { graphql } from "~/gql";

import { useGraphQL } from "~/fetcher/use-graphql";

const getPaymentTypes = graphql(`
    query getAllPaymentType{
        paymentTypes{
            label
        }
}
`);


export const useGetPaymentTypes = () => {
const {data: paymentTypes} = useGraphQL(getPaymentTypes)
  return {paymentTypes}
}