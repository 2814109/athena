import { useGraphQL } from "~/fetcher/use-graphql";
import { graphql } from "~/gql";


const getAllPredictCostDocuments = graphql(`
    query getAllPredictCostQuery{
        predictCosts(userId: 1){
    id
    } 
}
`)


export const useGetAllPredictCost = () => {
   const { data } = useGraphQL(getAllPredictCostDocuments);

  return {predictCosts: data?.data?.predictCosts}

}