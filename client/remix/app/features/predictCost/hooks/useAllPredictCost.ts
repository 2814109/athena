import { graphql } from "~/gql";


const getAllPredictCostDocuments = graphql(`
    query getAllPredictCostQuery{
        predictCosts(userId: 1){
    id
    } 
}
`)