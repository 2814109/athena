import { useGetAllPredictCost } from "../hooks/useAllPredictCost";
import { PredictCostPieChart } from "./PieChart/PredictCostPieChart";
import { PredictCostTable } from "./PredictCostTable";

export const PredictCostStatistics = () => {
  const { predictCosts } = useGetAllPredictCost();

  const setPredictCost = new Set(
    predictCosts?.map(({ categoryName }) => categoryName)
  );

  const predictCostData = [...setPredictCost.values()];
  const result = predictCostData.map((key) => {
    const calcValue = predictCosts
      ?.filter(({ categoryName }) => categoryName === key)
      .map((element) => element.amount)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return { name: key, value: calcValue ?? 0 };
  });

  return (
    <>
      <div>
        <PredictCostPieChart pieChartData={result} />
      </div>
      <PredictCostTable predictCosts={predictCosts} />
    </>
  );
};
