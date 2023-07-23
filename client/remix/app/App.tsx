import Film from "./Film";
import { graphql } from "./gql";
import { useGraphQL } from "./fetcher/use-graphql";

import { Suspense } from "react";

const allFilmsWithVariablesQueryDocument = graphql(/* GraphQL */ `
  query allFilmsWithVariablesQuery($first: Int!) {
    allFilms(first: $first) {
      edges {
        node {
          ...FilmItem
        }
      }
    }
  }
`);

export default function App() {
  const { data } = useGraphQL(allFilmsWithVariablesQueryDocument, {
    first: 10,
  });
  console.log(data);
  return (
    <>
      {data && (
        <ul>
          {data.data?.allFilms?.edges?.map(
            (e, i) => e?.node && <Film film={e?.node} key={`film-${i}`} />
          )}
        </ul>
      )}
    </>
  );
}
