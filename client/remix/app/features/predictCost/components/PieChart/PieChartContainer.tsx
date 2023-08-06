import { ReactNode } from "react";
import { PieChartData } from "../../types/PieChartData";
import { PieChart, Pie, Cell } from "recharts";
import { PIE_CHART_COLORS as COLORS } from "~/features/predictCost/styles/PIE_CHART_COLORS";

type PieChartContainerProps = {
  children: ReactNode;
  pieChartData: PieChartData[];
};
export const PieChartContainer = ({
  children,
  pieChartData,
}: PieChartContainerProps) => (
  <PieChart width={800} height={300}>
    <Pie
      data={pieChartData}
      cx="50%"
      cy="50%"
      labelLine={true}
      label={({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index,
      }) => {
        const RADIAN = Math.PI / 180;
        const radius = 25 + innerRadius + (outerRadius - innerRadius);
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
          <text
            x={x}
            y={y}
            fill={COLORS[index]}
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
          >
            {`${pieChartData[index].name}(¥${pieChartData[
              index
            ].value.toLocaleString()})`}
            {` ${(percent * 100).toFixed(0)}%`}
          </text>
        );
      }}
      outerRadius={80}
      fill="#8884d8"
      dataKey="value"
    >
      {children}
    </Pie>
  </PieChart>
);
