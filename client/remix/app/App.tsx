// import Film from "./Film";
import { graphql } from "./gql";
import { useGraphQL } from "./fetcher/use-graphql";

// const allFilmsWithVariablesQueryDocument = graphql(/* GraphQL */ `
//   query allFilmsWithVariablesQuery($first: Int!) {
//     allFilms(first: $first) {
//       edges {
//         node {
//           ...FilmItem
//         }
//       }
//     }
//   }
// `);

const findTodoByIdDocuments = graphql(`
  query findTodoByIdQuery($id: Int!) {
    todo(ID: $id) {
      id
    }
  }
`);
export default function App() {
  const { data } = useGraphQL(findTodoByIdDocuments, {
    id: 1,
  });
  console.log(data);
  return <>{data && <ul>{data.data?.todo.id}</ul>}</>;
}
