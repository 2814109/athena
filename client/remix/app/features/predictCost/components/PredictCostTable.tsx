import { useGetAllPredictCost } from "../hooks/useAllPredictCost";

export const PredictCostTable = () => {
  const { predictCosts } = useGetAllPredictCost();
  return (
    <>
      <h1>Table Component</h1>
      {predictCosts?.map((predictCost) => (
        <div>{JSON.stringify(predictCost)}</div>
      ))}
    </>
  );
};
