import { useGraphQL } from "~/fetcher/use-graphql";
import { graphql } from "~/gql";

const getAllPaymentDocuments = graphql(`
    query getAllPaymentQuery{
        payments(userId: 1){
            id
            label
            categoryName
            paymentAt
            cost
            paymentType
        }
    }
`)


export const useGetAllPayment = () => {
   const { data ,refetch} = useGraphQL(getAllPaymentDocuments);

  return {payments: data?.data?.payments ,refetch}
}