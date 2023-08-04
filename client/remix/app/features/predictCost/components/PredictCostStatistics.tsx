import { useGetAllPredictCost } from "../hooks/useAllPredictCost";
import { PredictCostPieChart } from "./PredictCostPieChart";
import { PredictCostTable } from "./PredictCostTable";

export const PredictCostStatistics = () => {
  const { predictCosts } = useGetAllPredictCost();

  return (
    <>
      <div>
        <PredictCostPieChart />
      </div>
      <PredictCostTable predictCosts={predictCosts} />
    </>
  );
};
