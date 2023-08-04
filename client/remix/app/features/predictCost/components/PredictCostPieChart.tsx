import { PieChart, PieLabel, Pie, Cell } from "recharts";

type PieChartData = { name: string; value: number };

type Props = {
  pieChartData: PieChartData[];
};

export const PredictCostPieChart = ({ pieChartData }: Props) => {
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#800080",
    "#FF00FF",
    "#FFD700",
    "#00FF00",
    "#FFA500",
    "#800000",
  ];

  return (
    <PieChart width={800} height={400}>
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
        {pieChartData.map((_, index) => (
          <>
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          </>
        ))}
      </Pie>
    </PieChart>
  );
};
