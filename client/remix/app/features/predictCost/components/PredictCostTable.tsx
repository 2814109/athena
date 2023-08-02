import { useGetAllPredictCost } from "../hooks/useAllPredictCost";

export const PredictCostTable = () => {
  const { predictCosts } = useGetAllPredictCost();
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
      <h2>Total : {`${totalCounts}`}</h2>
      {predictCosts?.map((predictCost) => (
        <div>{JSON.stringify(predictCost)}</div>
      ))}
    </>
  );
};
