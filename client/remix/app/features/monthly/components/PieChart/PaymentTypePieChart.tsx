import { PaymentsType } from "../../types/PaymentsType";
import { PIE_CHART_COLORS as COLORS } from "~/constants/PIE_CHART_COLORS";
import { Cell, Pie, PieChart } from "recharts";

export const PaymentTypePieChart = ({ payments }: PaymentsType) => {
  const setPredictCost = new Set(
    payments?.map(({ paymentType }) => paymentType)
  );

  const predictCostData = [...setPredictCost?.values()];
  const result = predictCostData?.map((key) => {
    const calcValue = payments
      ?.filter(({ paymentType }) => paymentType === key)
      .map((element) => element.cost)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return { name: key, value: calcValue ?? 0 };
  });

  return (
    <PieChart width={800} height={300}>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={result}
        cx="50%"
        cy="50%"
        outerRadius={80}
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
              {`${result[index].name}(¥${result[
                index
              ].value.toLocaleString()})`}
              {` ${(percent * 100).toFixed(0)}%`}
            </text>
          );
        }}
        fill="#8884d8"
      />
      {result?.map((element, index) => (
        <Cell
          key={`cell-${element.name}`}
          fill={COLORS[index % COLORS.length]}
        />
      ))}
    </PieChart>
  );
};
