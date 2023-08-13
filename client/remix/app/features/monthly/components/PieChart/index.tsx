import { PieChartContainer } from "~/components/PieChart/PieChartContainer";
import { PaymentsType } from "../../types/PaymentsType";
import { PIE_CHART_COLORS as COLORS } from "~/constants/PIE_CHART_COLORS";
import { Cell } from "recharts";

export const MonthlyPieChart = ({ payments }: PaymentsType) => {
  const setPredictCost = new Set(
    payments?.map(({ categoryName }) => categoryName)
  );

  const predictCostData = [...setPredictCost?.values()];
  const result = predictCostData?.map((key) => {
    const calcValue = payments
      ?.filter(({ categoryName }) => categoryName === key)
      .map((element) => element.cost)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return { name: key, value: calcValue ?? 0 };
  });

  return (
    <PieChartContainer pieChartData={result}>
      {result?.map((_, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </PieChartContainer>
  );
};
