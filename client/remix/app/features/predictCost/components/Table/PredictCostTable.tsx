import { PredictCost } from "~/gql/graphql";
import { PredictCostRow } from "./PredictCostRow";

type Props = {
  predictCosts: PredictCost[] | undefined;
};
export const PredictCostTable = ({ predictCosts }: Props) => {
  const initialValue = 0;

  const totalCounts = predictCosts
    ?.map(({ amount }) => amount)
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
  return (
    <>
      <h1>Table Component</h1>
      <h2>Total : {`${totalCounts?.toLocaleString()}`}</h2>
      <>
        {predictCosts?.map((predictCost) => (
          <PredictCostRow key={predictCost.id} predictCost={predictCost} />
        ))}
      </>
    </>
  );
};
