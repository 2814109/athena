import { useGraphQL } from "~/fetcher/use-graphql";
import { graphql } from "~/gql";


const getAllPredictCostDocuments = graphql(`
    query getAllPredictCostQuery{
        predictCosts(userId: 1){
            id
            label
            categoryName
            amount
    } 
}
`)


export const useGetAllPredictCost = () => {
   const { data ,refetch} = useGraphQL(getAllPredictCostDocuments);

  return {predictCosts: data?.data?.predictCosts ,refetch}

}