import { ReactNode } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { PIE_CHART_COLORS as COLORS } from "~/features/predictCost/styles/PIE_CHART_COLORS";
import { PieChartData } from "../../types/PieChartData";
import { PieChartContainer } from "./PieChartContainer";

type Props = {
  pieChartData: PieChartData[];
};

export const PredictCostPieChart = ({ pieChartData }: Props) => {
  return (
    <PieChartContainer pieChartData={pieChartData}>
      {pieChartData.map((_, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </PieChartContainer>
  );
};
